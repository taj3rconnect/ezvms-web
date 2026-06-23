(function () {
  const scene = document.getElementById("scene");
  const menuButton = document.querySelector(".menu-button");
  const nav = document.querySelector(".nav");
  const revealItems = document.querySelectorAll(".reveal");
  const modal = document.getElementById("demo-modal");
  const demoForm = document.getElementById("demo-form");
  const demoStatus = document.getElementById("demo-status");
  const demoConfirmation = document.getElementById("demo-confirmation");
  const timeSlotGrid = document.querySelector(".slot-grid");
  const loginModal = document.getElementById("login-modal");
  const loginForm = document.getElementById("login-form");
  const lastLogin = document.getElementById("last-login");
  const loginEmail = document.getElementById("login-email");
  const resetEmail = document.getElementById("reset-email");
  const rememberLogin = document.getElementById("remember-login");
  const loginStatus = document.getElementById("login-status");
  const resetStatus = document.getElementById("reset-status");
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

  document.querySelector("[data-close-demo]")?.addEventListener("click", () => {
    modal?.close();
  });

  let selectedDemoDate = document.querySelector("[data-demo-date].selected")?.dataset.demoDate || "";
  let selectedDemoTime = "";

  function setSchedulerView(name) {
    document.querySelectorAll("[data-scheduler-view]").forEach((view) => {
      view.classList.toggle("hidden", view.dataset.schedulerView !== name);
    });
  }

  document.querySelectorAll("[data-demo-date]").forEach((button) => {
    button.addEventListener("click", () => {
      document.querySelectorAll("[data-demo-date]").forEach((item) => item.classList.remove("selected"));
      button.classList.add("selected");
      selectedDemoDate = button.dataset.demoDate || "";
    });
  });

  document.querySelectorAll("[data-demo-time]").forEach((button) => {
    button.addEventListener("click", () => {
      document.querySelectorAll("[data-demo-time]").forEach((item) => item.classList.remove("selected"));
      button.classList.add("selected");
      selectedDemoTime = button.dataset.demoTime || "";
      if (demoStatus) demoStatus.textContent = `Selected ${selectedDemoDate} at ${selectedDemoTime}.`;
    });
  });

  function scrollTimeSlots(direction) {
    if (!timeSlotGrid) return;
    const firstSlot = timeSlotGrid.querySelector("[data-demo-time]");
    const slotWidth = firstSlot ? firstSlot.getBoundingClientRect().width + 10 : 240;
    timeSlotGrid.scrollBy({ left: direction * slotWidth * 2, behavior: "smooth" });
  }

  document.querySelector("[data-time-prev]")?.addEventListener("click", () => {
    scrollTimeSlots(-1);
  });

  document.querySelector("[data-time-next]")?.addEventListener("click", () => {
    scrollTimeSlots(1);
  });

  demoForm?.addEventListener("submit", (event) => {
    event.preventDefault();
    if (!selectedDemoDate || !selectedDemoTime) {
      if (demoStatus) demoStatus.textContent = "Please select a date and time.";
      return;
    }
    const name = document.getElementById("demo-name")?.value.trim() || "there";
    if (demoConfirmation) {
      demoConfirmation.textContent = `${name}, your mock ezVMS demo is booked for ${selectedDemoDate} -- ${selectedDemoTime} ET.`;
    }
    setSchedulerView("confirm");
  });

  document.querySelector("[data-demo-reset]")?.addEventListener("click", () => {
    setSchedulerView("booking");
    if (demoStatus) demoStatus.textContent = "Select a time to schedule this mock event.";
  });

  function formatLoginDate(date) {
    const parts = new Intl.DateTimeFormat("en-US", {
      month: "2-digit",
      day: "2-digit",
      year: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      hour12: false
    }).formatToParts(date).reduce((values, part) => {
      values[part.type] = part.value;
      return values;
    }, {});

    return `${parts.month}/${parts.day}/${parts.year} -- ${parts.hour}:${parts.minute}`;
  }

  function readLastLogin() {
    try {
      return JSON.parse(window.localStorage.getItem("ezvmsLastLogin") || "null");
    } catch {
      return null;
    }
  }

  function updateLastLoginText() {
    if (!lastLogin) return;
    const details = readLastLogin();
    lastLogin.textContent = details
      ? `Last logged in: ${details.time} from ${details.ip}`
      : "Last logged in: Not available";
  }

  function setLoginView(name) {
    document.querySelectorAll("[data-login-view]").forEach((view) => {
      view.classList.toggle("hidden", view.dataset.loginView !== name);
    });
  }

  async function getIpAddress() {
    try {
      const response = await fetch("https://api.ipify.org?format=json", { cache: "no-store" });
      if (!response.ok) throw new Error("IP lookup failed");
      const data = await response.json();
      return data.ip || "IP unavailable";
    } catch {
      return "IP unavailable";
    }
  }

  function openLogin() {
    setLoginView("signin");
    updateLastLoginText();
    const rememberedEmail = window.localStorage.getItem("ezvmsRememberedEmail");
    if (loginEmail && rememberedEmail) loginEmail.value = rememberedEmail;
    if (resetEmail && rememberedEmail) resetEmail.value = rememberedEmail;
    if (loginStatus) loginStatus.textContent = "Mock login stores this browser's latest sign-in details.";
    loginModal?.showModal();
  }

  document.querySelectorAll("[data-open-login]").forEach((button) => {
    button.addEventListener("click", (event) => {
      event.preventDefault();
      nav?.classList.remove("open");
      menuButton?.setAttribute("aria-expanded", "false");
      openLogin();
    });
  });

  document.querySelector("[data-close-login]")?.addEventListener("click", () => {
    loginModal?.close();
  });

  loginForm?.addEventListener("submit", async (event) => {
    event.preventDefault();
    const ip = await getIpAddress();
    const time = formatLoginDate(new Date());
    window.localStorage.setItem("ezvmsLastLogin", JSON.stringify({ time, ip }));
    if (rememberLogin?.checked && loginEmail?.value) {
      window.localStorage.setItem("ezvmsRememberedEmail", loginEmail.value);
    } else {
      window.localStorage.removeItem("ezvmsRememberedEmail");
    }
    updateLastLoginText();
    if (loginStatus) loginStatus.textContent = `Signed in: ${time} from ${ip}`;
  });

  document.querySelector("[data-forgot-password]")?.addEventListener("click", () => {
    if (resetEmail && loginEmail) resetEmail.value = loginEmail.value;
    if (resetStatus) resetStatus.textContent = "";
    setLoginView("forgot");
  });

  document.querySelector("[data-back-login]")?.addEventListener("click", () => {
    setLoginView("signin");
  });

  document.querySelector("[data-send-reset]")?.addEventListener("click", () => {
    if (resetStatus) resetStatus.textContent = "Reset link prepared for this mock flow.";
  });

  let slides = [];
  let active = 0;
  let playing = true;
  let timer = null;
  let pendingGalleryStart = false;

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
      <img src="./${slide.image}" alt="${slide.title}">
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

  function startGalleryFromBeginning() {
    pendingGalleryStart = !slides.length;
    active = 0;
    playing = true;
    if (toggle) {
      toggle.textContent = "Pause";
      toggle.setAttribute("aria-label", "Pause gallery");
    }
    if (slides.length) {
      renderSlide();
      startTimer();
    }
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
  document.querySelector("[data-start-gallery]")?.addEventListener("click", () => {
    window.setTimeout(startGalleryFromBeginning, 120);
  });

  fetch("./assets/gallery/gallery.json")
    .then((response) => (response.ok ? response.json() : Promise.reject(new Error("Missing gallery JSON"))))
    .then((items) => {
      slides = items;
      if (pendingGalleryStart) {
        startGalleryFromBeginning();
      } else {
        renderSlide();
        startTimer();
      }
    })
    .catch(() => {
      if (frame) frame.innerHTML = "<p>Gallery screenshots are not available.</p>";
    });
})();
