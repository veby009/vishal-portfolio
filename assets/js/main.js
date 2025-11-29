/* -----------------------------------------------------------
   DARK / LIGHT MODE TOGGLE
----------------------------------------------------------- */

const themeToggle = document.getElementById("themeToggle");
const body = document.body;

// Load saved theme
if (localStorage.getItem("theme") === "dark") {
    body.classList.remove("light");
    body.classList.add("dark");
    themeToggle.textContent = "☀️";
} else {
    body.classList.add("light");
    themeToggle.textContent = "🌙";
}

// Toggle theme
themeToggle.addEventListener("click", () => {
    body.classList.toggle("dark");
    body.classList.toggle("light");

    if (body.classList.contains("dark")) {
        localStorage.setItem("theme", "dark");
        themeToggle.textContent = "☀️";
    } else {
        localStorage.setItem("theme", "light");
        themeToggle.textContent = "🌙";
    }
});

/* -----------------------------------------------------------
   CERTIFICATE GALLERY LIGHTBOX (If Exists)
----------------------------------------------------------- */

const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightboxImage");
const closeLightbox = document.getElementById("closeLightbox");

function openLightbox(src) {
    if (lightbox) {
        lightbox.style.display = "flex";
        lightboxImage.src = src;
    }
}

if (closeLightbox) {
    closeLightbox.addEventListener("click", () => {
        lightbox.style.display = "none";
    });
}

document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && lightbox) {
        lightbox.style.display = "none";
    }
});

/* -----------------------------------------------------------
   SCROLL ANIMATION (Fade-in Elements)
----------------------------------------------------------- */

const fadeElements = document.querySelectorAll(".fade-in");

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
        }
    });
}, { threshold: 0.2 });

fadeElements.forEach(el => observer.observe(el));


/* -----------------------------------------------------------
   FUTURE FEATURES CAN BE ADDED HERE
----------------------------------------------------------- */
