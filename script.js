alert("Welcome sa bahay ni Kyle!");

/* Dark Mode */
const darkModeBtn = document.getElementById("darkModeBtn");

if (darkModeBtn) {
    darkModeBtn.addEventListener("click", function () {
        document.body.classList.toggle("dark-mode");

        if (document.body.classList.contains("dark-mode")) {
            darkModeBtn.textContent = "Light Mode";
        } else {
            darkModeBtn.textContent = "Dark Mode";
        }
    });
}

/* Contact Form */
const form = document.getElementById("contactform");

if (form) {
    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const message = document.getElementById("message").value;

        if (name === "" || email === "" || message === "") {
            alert("Please fill in all fields.");
            return;
        }

        alert(`Thank you, ${name}! Your message has been received.`);
        form.reset();
    });
}

/* Mobile Menu */
const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

if (menuBtn && navLinks) {
    menuBtn.addEventListener("click", function () {
        navLinks.classList.toggle("show");

        if (navLinks.classList.contains("show")) {
            menuBtn.textContent = "Close Menu";
        } else {
            menuBtn.textContent = "= Menu";
        }
    });
}

/* Scroll Animation */
const scrollElements = document.querySelectorAll(".scroll-animation");

function showOnScroll() {
    scrollElements.forEach(function (element) {
        const elementPosition = element.getBoundingClientRect().top;
        const screenPosition = window.innerHeight - 100;

        if (elementPosition < screenPosition) {
            element.classList.add("show");
        }
    });
}

window.addEventListener("scroll", showOnScroll);

showOnScroll();