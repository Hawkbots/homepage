// HawkBots // FRC 4619 — small progressive enhancements.
(() => {
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // Mobile nav toggle
  const toggle = document.querySelector(".nav__toggle");
  const links = document.getElementById("nav-links");
  toggle.addEventListener("click", () => {
    const open = links.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(open));
  });
  links.addEventListener("click", (e) => {
    if (e.target.tagName === "A") {
      links.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
    }
  });

  // Reveal sections on scroll
  const reveals = document.querySelectorAll(".reveal");
  if (reduceMotion || !("IntersectionObserver" in window)) {
    reveals.forEach((el) => el.classList.add("visible"));
  } else {
    const io = new IntersectionObserver(
      (entries) => entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          io.unobserve(entry.target);
        }
      }),
      { threshold: 0.12 }
    );
    reveals.forEach((el) => io.observe(el));
  }

  // Glitch the title on hover and at random intervals
  const glitch = document.querySelector(".glitch");
  if (glitch && !reduceMotion) {
    const fire = () => {
      glitch.classList.remove("is-glitching");
      void glitch.offsetWidth; // restart animation
      glitch.classList.add("is-glitching");
    };
    glitch.addEventListener("mouseenter", fire);
    glitch.addEventListener("animationend", () => glitch.classList.remove("is-glitching"));
    const loop = () => {
      fire();
      setTimeout(loop, 2500 + Math.random() * 3500);
    };
    setTimeout(loop, 1200);
  }
})();
