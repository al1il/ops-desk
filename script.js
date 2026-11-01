(function () {
  "use strict";

  const clockEl = document.getElementById("clock");
  const onairEl = document.getElementById("onair");
  const motionBtn = document.getElementById("toggle-motion");
  const themeBtn = document.getElementById("toggle-theme");
  const channels = document.querySelectorAll(".channel");
  const ticker = document.getElementById("ticker");

  // Live clock (local time, 24h)
  function updateClock() {
    const now = new Date();
    const h = String(now.getHours()).padStart(2, "0");
    const m = String(now.getMinutes()).padStart(2, "0");
    const s = String(now.getSeconds()).padStart(2, "0");
    if (clockEl) clockEl.textContent = h + ":" + m + ":" + s;
  }
  updateClock();
  setInterval(updateClock, 1000);

  // Respect prefers-reduced-motion by default
  const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (prefersReduced) {
    document.body.classList.add("no-motion");
    if (motionBtn) {
      motionBtn.setAttribute("aria-pressed", "true");
      motionBtn.textContent = "Motion off";
    }
  }

  // Motion toggle
  if (motionBtn) {
    motionBtn.addEventListener("click", function () {
      const off = document.body.classList.toggle("no-motion");
      motionBtn.setAttribute("aria-pressed", off ? "true" : "false");
      motionBtn.textContent = off ? "Motion off" : "Motion";
    });
  }

  // Theme toggle (light / dark)
  if (themeBtn) {
    themeBtn.addEventListener("click", function () {
      const isLight = document.documentElement.getAttribute("data-theme") === "light";
      if (isLight) {
        document.documentElement.removeAttribute("data-theme");
        themeBtn.setAttribute("aria-pressed", "false");
        themeBtn.textContent = "Theme";
      } else {
        document.documentElement.setAttribute("data-theme", "light");
        themeBtn.setAttribute("aria-pressed", "true");
        themeBtn.textContent = "Dark";
      }
    });
  }

  // Channel expand / collapse
  function closeAll(except) {
    channels.forEach(function (ch) {
      if (ch === except) return;
      ch.setAttribute("aria-expanded", "false");
      const detail = ch.querySelector(".panel-detail");
      if (detail) detail.hidden = true;
    });
  }

  function toggleChannel(ch) {
    const expanded = ch.getAttribute("aria-expanded") === "true";
    if (expanded) {
      ch.setAttribute("aria-expanded", "false");
      const detail = ch.querySelector(".panel-detail");
      if (detail) detail.hidden = true;
    } else {
      closeAll(ch);
      ch.setAttribute("aria-expanded", "true");
      const detail = ch.querySelector(".panel-detail");
      if (detail) detail.hidden = false;
      // Bring into view on mobile
      ch.scrollIntoView({ behavior: document.body.classList.contains("no-motion") ? "auto" : "smooth", block: "nearest" });
    }
  }

  channels.forEach(function (ch) {
    ch.addEventListener("click", function (e) {
      // Ignore clicks on links inside if any later
      if (e.target.closest("a")) return;
      toggleChannel(ch);
    });
    ch.addEventListener("keydown", function (e) {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        toggleChannel(ch);
      }
      if (e.key === "Escape" && ch.getAttribute("aria-expanded") === "true") {
        toggleChannel(ch);
      }
    });
  });

  // Duplicate ticker content for seamless loop when motion is on
  if (ticker && !document.body.classList.contains("no-motion")) {
    const items = ticker.innerHTML;
    ticker.innerHTML = items + items;
  }

  // Subtle status flicker on ON AIR (only if motion allowed)
  if (onairEl && !document.body.classList.contains("no-motion")) {
    setInterval(function () {
      if (document.body.classList.contains("no-motion")) return;
      onairEl.style.opacity = Math.random() > 0.92 ? "0.55" : "1";
    }, 1800);
  }
})();
