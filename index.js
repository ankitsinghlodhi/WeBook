const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");
const getCourseBtn = document.querySelector("#get-course-btn"); // ← Add this

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // Remove "active" from all
        navLinks.forEach((link) => link.classList.remove("active"));
        getCourseBtn.classList.remove("active"); // ← Also remove from button

        // Add "active" to matched nav link
        navLinks.forEach((link) => {
          if (link.getAttribute("href") === `#${entry.target.id}`) {
            link.classList.add("active");
          }
        });

        // 🔷 Highlight Get Course button if course section is active
        if (entry.target.id === "courses") {
          getCourseBtn.classList.add("active");
        }
      }
    });
  },
  {
    threshold: 0.6,
  }
);

sections.forEach((section) => observer.observe(section));
