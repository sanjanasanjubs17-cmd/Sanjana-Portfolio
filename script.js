
/* 1. Dark mode */
const themeButton = document.getElementById("theme-button");

themeButton.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");

    const isDarkMode = document.body.classList.contains("dark-mode");

    if (isDarkMode) {
        themeButton.textContent = "☀️ Light Mode";
    } else {
        themeButton.textContent = "🌙 Dark Mode";
    }
});

/* 2. Live clock */
const liveClock = document.getElementById("live-clock");

function updateClock() {
    const now = new Date();

    liveClock.textContent =
        "Current time: " + now.toLocaleTimeString();
}

updateClock();
setInterval(updateClock, 1000);

/* 3. Contact form practice demo */
const contactForm = document.getElementById("contact-form");
const formStatus = document.getElementById("form-status");

contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (name === "" || email === "" || message === "") {
        formStatus.textContent = "Please fill in all fields.";
        return;
    }

    formStatus.textContent =
        "Thank you, " + name + "! The form demo worked.";

    contactForm.reset();
});

/* 4. Scroll-to-top button */
const topButton = document.getElementById("top-button");

window.addEventListener("scroll", function () {
    if (window.scrollY > 300) {
        topButton.style.display = "block";
    } else {
        topButton.style.display = "none";
    }
});

topButton.addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});
