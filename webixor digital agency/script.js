// Smooth scroll for buttons with [data-scroll-to]
document.querySelectorAll("[data-scroll-to]").forEach((el) => {
  el.addEventListener("click", () => {
    const target = el.getAttribute("data-scroll-to");
    if (!target) return;
    const elTarget = document.querySelector(target);
    if (!elTarget) return;
    elTarget.scrollIntoView({ behavior: "smooth", block: "start" });
  });
});

// Simple fade-in on scroll using IntersectionObserver
const observerOptions = {
  root: null,
  threshold: 0.16,
};

const onIntersect = (entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
};

const io = "IntersectionObserver" in window ? new IntersectionObserver(onIntersect, observerOptions) : null;

if (io) {
  document
    .querySelectorAll(
      ".project-card, .service-card, .why__item, .cta__inner, .trust__item"
    )
    .forEach((el) => {
      el.classList.add("fade-in");
      io.observe(el);
    });
}

// Slight hero preview lift effect once page is ready
window.addEventListener("load", () => {
  const hero = document.querySelector(".hero");
  if (hero) {
    hero.classList.add("preview-visible");
  }
});

