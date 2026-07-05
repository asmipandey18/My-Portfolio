// ==========================================
// MOBILE NAVIGATION
// ==========================================

const menuToggle = document.getElementById("menu-toggle");
const navbar = document.getElementById("navbar");

// Open & Close Mobile Menu

menuToggle.addEventListener("click", () => {

    navbar.classList.toggle("active");

});

// Close menu after clicking a navigation link

const navLinks = document.querySelectorAll(".navbar a");

navLinks.forEach(link => {

    link.addEventListener("click", () => {

        navbar.classList.remove("active");

    });

});


// ==========================================
// DARK / LIGHT MODE
// ==========================================

const themeToggle = document.getElementById("theme-toggle");
const themeIcon = themeToggle.querySelector("i");

// Load saved theme

if (localStorage.getItem("theme") === "light") {

    document.body.classList.add("light-theme");
    themeIcon.classList.replace("fa-moon", "fa-sun");

}

// Toggle Theme

themeToggle.addEventListener("click", () => {

    document.body.classList.toggle("light-theme");

    if (document.body.classList.contains("light-theme")) {

        localStorage.setItem("theme", "light");
        themeIcon.classList.replace("fa-moon", "fa-sun");

    } else {

        localStorage.setItem("theme", "dark");
        themeIcon.classList.replace("fa-sun", "fa-moon");

    }

});

// Back to Top Button

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {

        topBtn.classList.add("show");

    } else {

        topBtn.classList.remove("show");

    }

});

topBtn.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});

// ==========================================
// ACTIVE NAVIGATION
// ==========================================

const sections = document.querySelectorAll("section");
const navItems = document.querySelectorAll(".navbar a");

window.addEventListener("scroll", () => {

    let currentSection = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;
        const sectionHeight = section.offsetHeight;

        if (window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight) {

            currentSection = section.getAttribute("id");

        }

    });

    navItems.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + currentSection) {

            link.classList.add("active");

        }

    });

});
// ==========================================
// SCROLL REVEAL ANIMATION
// ==========================================

const reveals = document.querySelectorAll(".reveal");

function revealSections() {

    reveals.forEach(section => {

        const windowHeight = window.innerHeight;
        const sectionTop = section.getBoundingClientRect().top;
        const revealPoint = 120;

        if (sectionTop < windowHeight - revealPoint) {

            section.classList.add("active");

        }

    });

}

window.addEventListener("scroll", revealSections);

// Reveal visible sections on page load
revealSections();

// ==========================================
// CONTACT FORM VALIDATION
// ==========================================

const contactForm = document.querySelector("form");

const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const subjectInput = document.getElementById("subject");
const messageInput = document.getElementById("message");

const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const subjectError = document.getElementById("subjectError");
const messageError = document.getElementById("messageError");

const formMessage = document.getElementById("form-message");

contactForm.addEventListener("submit", function (event) {

    let isValid = true;

    nameError.textContent = "";
    emailError.textContent = "";
    subjectError.textContent = "";
    messageError.textContent = "";
    formMessage.textContent = "";

    // Name Validation

    const namePattern = /^[A-Za-z ]+$/;

    if (nameInput.value.trim() === "") {

        nameError.textContent = "Full name is required.";
        isValid = false;

    } else if (!namePattern.test(nameInput.value.trim())) {

        nameError.textContent = "Only letters and spaces are allowed.";
        isValid = false;

    }

    // Email Validation

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (emailInput.value.trim() === "") {

        emailError.textContent = "Email is required.";
        isValid = false;

    } else if (!emailPattern.test(emailInput.value.trim())) {

        emailError.textContent = "Please enter a valid email address.";
        isValid = false;

    }

    // Subject Validation

    if (subjectInput.value.trim().length < 5) {

        subjectError.textContent =
            "Subject must contain at least 5 characters.";

        isValid = false;

    }

    // Message Validation

    if (messageInput.value.trim().length < 20) {

        messageError.textContent =
            "Message must contain at least 20 characters.";

        isValid = false;

    }

    if (!isValid) {

        event.preventDefault();

        return;

    }

    formMessage.style.color = "#38BDF8";
    formMessage.textContent = "Sending your message...";

});

// ==========================================
// HEADER SCROLL EFFECT
// ==========================================

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        header.classList.add("scrolled");

    } else {

        header.classList.remove("scrolled");

    }

});

const typingText = document.getElementById("typing-text");

const text = "AI & Machine Learning Engineer";

let index = 0;

function typeEffect() {

    if (index < text.length) {

        typingText.textContent += text.charAt(index);

        index++;

        setTimeout(typeEffect, 80);

    }

}

typeEffect();

