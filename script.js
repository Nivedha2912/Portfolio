
/* Automatically update the footer year */

const yearElement = document.getElementById("year");

if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}

/* Reveal elements when they enter the screen */

const revealElements = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window) {
  const revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.12
    }
  );

  revealElements.forEach((element) => {
    revealObserver.observe(element);
  });
} else {
  revealElements.forEach((element) => {
    element.classList.add("visible");
  });
}

/* Highlight the navigation link for the current section */

const sections = document.querySelectorAll("main section[id]");
const navLinks = document.querySelectorAll(".nav-links a");

if ("IntersectionObserver" in window) {
  const sectionObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        navLinks.forEach((link) => {
          const isActive =
            link.getAttribute("href") === `#${entry.target.id}`;

          if (isActive) {
            link.style.color = "var(--blue)";
            link.setAttribute("aria-current", "location");
          } else {
            link.style.color = "";
            link.removeAttribute("aria-current");
          }
        });
      });
    },
    {
      rootMargin: "-25% 0px -60% 0px"
    }
  );

  sections.forEach((section) => {
    sectionObserver.observe(section);
  });
}
