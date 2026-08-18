// ===== Mobile menu toggle =====
const toggle = document.getElementById("navToggle");
const links = document.getElementById("navLinks");

toggle.addEventListener("click", () => {
  links.classList.toggle("open");
});

// Close menu when a link is clicked
links.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => links.classList.remove("open"));
});

// ===== Reveal on scroll =====
const revealTargets = document.querySelectorAll(".section, .hero__inner > *");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("reveal");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 }
);

revealTargets.forEach((el) => observer.observe(el));

// Reveal hero immediately on load
window.addEventListener("load", () => {
  document
    .querySelectorAll(".hero__inner > *")
    .forEach((el, i) => setTimeout(() => el.classList.add("reveal"), i * 120));
});
