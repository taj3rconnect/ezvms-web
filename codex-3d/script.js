(function () {
  const scene = document.getElementById("scene");
  const menuButton = document.querySelector(".menu-button");
  const nav = document.querySelector(".nav");
  const revealItems = document.querySelectorAll(".reveal");
  const modal = document.getElementById("demo-modal");
  const frame = document.getElementById("gallery-frame");
  const count = document.getElementById("slide-count");
  const progress = document.getElementById("progress-bar");
  const prev = document.querySelector("[data-prev]");
  const next = document.querySelector("[data-next]");
  const toggle = document.querySelector("[data-toggle]");
  const replay = document.querySelector("[data-replay]");
  const delay = 4200;

  document.addEventListener("pointermove", (event) => {
    if (!scene || window.matchMedia("(max-width: 680px)").matches) return;
    const x = (event.clientX / window.innerWidth - 0.5) * 18;
    const y = (event.clientY / window.innerHeight - 0.5) * -14;
    scene.style.setProperty("--ry", `${22 + x}deg`);
    scene.style.setProperty("--rx", `${-14 + y}deg`);
  });

  menuButton?.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("open");
    menuButton.setAttribute("aria-expanded", String(isOpen));
  });

  nav?.addEventListener("click", (event) => {
    if (event.target.closest("a")) {
      nav.classList.remove("open");
      menuButton?.setAttribute("aria-expanded", "false");
    }
  });

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("in-view");
        observer.unobserve(entry.target);
      });
    },
    { threshold: 0.14 }
  );

  revealItems.forEach((item) => observer.observe(item));

  document.querySelectorAll("[data-open-demo]").forEach((button) => {
    button.addEventListener("click", () => modal?.showModal());
  });

  let slides = [];
  let active = 0;
  let playing = true;
  let timer = null;

  function resetProgress() {
    if (!progress) return;
    progress.style.animation = "none";
    progress.offsetHeight;
    progress.style.animation = playing ? `progress ${delay}ms linear forwards` : "none";
  }

  function renderSlide() {
    if (!frame || !slides.length) return;
    const slide = slides[active];
    frame.innerHTML = `
      <img src="../codex/${slide.image}" alt="${slide.title}">
      <figcaption>${slide.title}</figcaption>
    `;
    if (count) count.textContent = `${String(active + 1).padStart(2, "0")} / ${String(slides.length).padStart(2, "0")}`;
    resetProgress();
  }

  function stopTimer() {
    if (timer) window.clearInterval(timer);
    timer = null;
  }

  function startTimer() {
    stopTimer();
    if (!playing) return;
    timer = window.setInterval(() => go(1, false), delay);
  }

  function go(delta, manual = true) {
    if (!slides.length) return;
    active = (active + delta + slides.length) % slides.length;
    renderSlide();
    if (manual) startTimer();
  }

  function setPlaying(nextPlaying) {
    playing = nextPlaying;
    if (toggle) {
      toggle.textContent = playing ? "Pause" : "Play";
      toggle.setAttribute("aria-label", playing ? "Pause gallery" : "Play gallery");
    }
    renderSlide();
    startTimer();
  }

  prev?.addEventListener("click", () => go(-1));
  next?.addEventListener("click", () => go(1));
  toggle?.addEventListener("click", () => setPlaying(!playing));
  replay?.addEventListener("click", () => {
    active = 0;
    setPlaying(true);
  });
  frame?.addEventListener("click", (event) => {
    const rect = frame.getBoundingClientRect();
    const direction = event.clientX < rect.left + rect.width / 2 ? -1 : 1;
    go(direction);
  });

  fetch("../codex/assets/gallery/gallery.json")
    .then((response) => (response.ok ? response.json() : Promise.reject(new Error("Missing gallery JSON"))))
    .then((items) => {
      slides = items;
      renderSlide();
      startTimer();
    })
    .catch(() => {
      if (frame) frame.innerHTML = "<p>Gallery screenshots are not available.</p>";
    });
})();
