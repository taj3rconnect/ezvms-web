(function () {
  const navToggle = document.querySelector(".nav-toggle");
  const navPanel = document.querySelector(".nav-panel");
  const revealItems = document.querySelectorAll(".reveal");
  const counters = document.querySelectorAll("[data-count]");
  const demoModal = document.getElementById("demo-modal");
  const loginModal = document.getElementById("login-modal");
  const demoForm = document.getElementById("demo-form");
  const loginForm = document.getElementById("login-form");
  const agentButtons = document.querySelectorAll("[data-agent]");
  const galleryStage = document.getElementById("gallery-stage");
  const galleryCount = document.getElementById("gallery-count");
  const galleryPrev = document.querySelector("[data-gallery-prev]");
  const galleryNext = document.querySelector("[data-gallery-next]");
  const galleryToggle = document.querySelector("[data-gallery-toggle]");
  const galleryReplay = document.querySelector("[data-gallery-replay]");
  const galleryProgress = document.getElementById("gallery-progress");

  function openModal(modal) {
    if (!modal) return;
    modal.classList.add("open");
    document.body.classList.add("modal-open");
  }

  function closeModals() {
    document.querySelectorAll(".modal.open").forEach((modal) => modal.classList.remove("open"));
    document.body.classList.remove("modal-open");
  }

  navToggle?.addEventListener("click", () => {
    const isOpen = navPanel.classList.toggle("open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });

  navPanel?.addEventListener("click", (event) => {
    if (event.target.closest("a")) {
      navPanel.classList.remove("open");
      navToggle?.setAttribute("aria-expanded", "false");
    }
  });

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.16 }
  );

  revealItems.forEach((item) => observer.observe(item));

  const counterObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const el = entry.target;
        const target = Number(el.dataset.count || 0);
        const duration = 1100;
        const start = performance.now();

        function tick(now) {
          const progress = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          el.textContent = Math.round(target * eased).toLocaleString();
          if (progress < 1) requestAnimationFrame(tick);
        }

        requestAnimationFrame(tick);
        counterObserver.unobserve(el);
      });
    },
    { threshold: 0.5 }
  );

  counters.forEach((counter) => counterObserver.observe(counter));

  document.querySelectorAll("[data-book-demo]").forEach((trigger) => {
    trigger.addEventListener("click", () => openModal(demoModal));
  });

  document.querySelectorAll("[data-login]").forEach((trigger) => {
    trigger.addEventListener("click", () => openModal(loginModal));
  });

  document.querySelectorAll("[data-close-modal]").forEach((trigger) => {
    trigger.addEventListener("click", closeModals);
  });

  document.querySelectorAll(".modal").forEach((modal) => {
    modal.addEventListener("click", (event) => {
      if (event.target === modal) closeModals();
    });
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeModals();
  });

  document.querySelectorAll("[data-slot]").forEach((slot) => {
    slot.addEventListener("click", () => {
      document.querySelectorAll("[data-slot]").forEach((item) => item.classList.remove("selected"));
      slot.classList.add("selected");
    });
  });

  demoForm?.addEventListener("submit", (event) => {
    event.preventDefault();
    demoForm.hidden = true;
    demoModal.querySelector(".modal-success").hidden = false;
  });

  loginForm?.addEventListener("submit", (event) => {
    event.preventDefault();
    closeModals();
  });

  function placeTooltip(tooltip, trigger) {
    const rect = trigger.getBoundingClientRect();
    const top = rect.top + window.scrollY + 18;
    const left = rect.left + window.scrollX + Math.min(28, rect.width * 0.18);
    tooltip.style.top = `${top}px`;
    tooltip.style.left = `${left}px`;
  }

  function initAgentTooltips(explanations) {
    const tooltip = document.createElement("div");
    tooltip.className = "agent-tooltip";
    tooltip.setAttribute("role", "tooltip");
    document.body.appendChild(tooltip);

    agentButtons.forEach((button) => {
      const key = button.dataset.agent;
      const text = explanations[key];
      if (!text) return;

      button.setAttribute("aria-label", `${button.textContent}. ${text}`);

      function show() {
        tooltip.textContent = text;
        placeTooltip(tooltip, button);
        tooltip.classList.add("show");
      }

      function hide() {
        tooltip.classList.remove("show");
      }

      button.addEventListener("mouseenter", show);
      button.addEventListener("focus", show);
      button.addEventListener("mouseleave", hide);
      button.addEventListener("blur", hide);
    });

    window.addEventListener("scroll", () => tooltip.classList.remove("show"), { passive: true });
    window.addEventListener("resize", () => tooltip.classList.remove("show"));
  }

  if (agentButtons.length) {
    fetch("agent-explanations.json")
      .then((response) => (response.ok ? response.json() : Promise.reject(new Error("Missing agent explanation JSON"))))
      .then(initAgentTooltips)
      .catch(() => {
        initAgentTooltips({});
      });
  }

  function initGallery(items) {
    if (!galleryStage || !items.length) return;
    let active = 0;
    let playing = true;
    let timer = null;
    const delay = 4200;

    function render() {
      const item = items[active];
      galleryStage.innerHTML = `
        <figure class="gallery-slide">
          <img src="${item.image}" alt="${item.title}">
          <figcaption>
            <span>${String(active + 1).padStart(2, "0")}</span>
            <strong>${item.title}</strong>
          </figcaption>
        </figure>
      `;
      if (galleryCount) galleryCount.textContent = `${String(active + 1).padStart(2, "0")} / ${String(items.length).padStart(2, "0")}`;
      if (galleryProgress) {
        galleryProgress.style.animation = "none";
        galleryProgress.offsetHeight;
        galleryProgress.style.animation = playing ? `galleryProgress ${delay}ms linear forwards` : "none";
      }
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
      active = (active + delta + items.length) % items.length;
      render();
      if (manual) startTimer();
    }

    function setPlaying(next) {
      playing = next;
      if (galleryToggle) {
        galleryToggle.textContent = playing ? "Pause" : "Play";
        galleryToggle.setAttribute("aria-label", playing ? "Pause gallery" : "Play gallery");
      }
      render();
      startTimer();
    }

    galleryPrev?.addEventListener("click", () => go(-1));
    galleryNext?.addEventListener("click", () => go(1));
    galleryToggle?.addEventListener("click", () => setPlaying(!playing));
    galleryReplay?.addEventListener("click", () => {
      active = 0;
      setPlaying(true);
    });

    render();
    startTimer();
  }

  if (galleryStage) {
    fetch("assets/gallery/gallery.json")
      .then((response) => (response.ok ? response.json() : Promise.reject(new Error("Missing gallery JSON"))))
      .then(initGallery)
      .catch(() => {
        galleryStage.innerHTML = '<p class="gallery-loading">Screenshots are not available yet.</p>';
      });
  }

  demoModal?.addEventListener("transitionend", () => {
    if (!demoModal.classList.contains("open")) {
      demoForm.hidden = false;
      demoModal.querySelector(".modal-success").hidden = true;
      demoForm.reset();
      document.querySelectorAll("[data-slot]").forEach((item) => item.classList.remove("selected"));
    }
  });
})();
