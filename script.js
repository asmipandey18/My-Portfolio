'use strict';

/*=====================================================
            DOM ELEMENTS
=====================================================*/

const header = document.querySelector('.header');

const menuToggle = document.querySelector('.menu-toggle');

const navbar = document.querySelector('.navbar');

const navLinks = document.querySelectorAll('.navbar a');

const backTop = document.querySelector('.back-top');

const progressBar = document.querySelector('.progress-bar');

const revealElements = document.querySelectorAll(

    '.reveal, .fade-left, .fade-right, .zoom'

);

/*=====================================================
        STICKY HEADER
=====================================================*/

window.addEventListener('scroll', () => {

    if (window.scrollY > 80) {

        header.classList.add('scrolled');

    }

    else {

        header.classList.remove('scrolled');

    }

});

/*=====================================================
        MOBILE MENU
=====================================================*/

if(menuToggle){

    menuToggle.addEventListener('click',()=>{

        navbar.classList.toggle('open');

        menuToggle.classList.toggle('active');

    });

}

/*=====================================================
        CLOSE MENU
=====================================================*/

navLinks.forEach(link=>{

    link.addEventListener('click',()=>{

        navbar.classList.remove('open');

        menuToggle.classList.remove('active');

    });

});

/*=====================================================
        SCROLL PROGRESS BAR
=====================================================*/

window.addEventListener('scroll', () => {

    if (!progressBar) return;

    const scrollTop = window.scrollY;

    const pageHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

    const progress = (scrollTop / pageHeight) * 100;

    progressBar.style.width = progress + "%";

});



/*=====================================================
        ACTIVE NAVIGATION
=====================================================*/

const sections = document.querySelectorAll("section[id]");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;

        const sectionHeight = section.offsetHeight;

        if (window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});

/*=====================================================
        SMOOTH SCROLL
=====================================================*/

navLinks.forEach(link => {

    link.addEventListener("click", function (e) {

        e.preventDefault();

        const target = document.querySelector(

            this.getAttribute("href")

        );

        if (!target) return;

        target.scrollIntoView({

            behavior: "smooth"

        });

    });

});



/*=====================================================
        BACK TO TOP BUTTON
=====================================================*/

if (backTop) {

    window.addEventListener("scroll", () => {

        if (window.scrollY > 500) {

            backTop.style.opacity = "1";

            backTop.style.visibility = "visible";

        }

        else {

            backTop.style.opacity = "0";

            backTop.style.visibility = "hidden";

        }

    });

}

/*=====================================================
            SCROLL REVEAL ANIMATION
=====================================================*/

const observer = new IntersectionObserver(

    (entries) => {

        entries.forEach(entry => {

            if(entry.isIntersecting){

                entry.target.classList.add('active');

            }

        });

    },

    {

        threshold:0.15

    }

);

revealElements.forEach(element => {

    observer.observe(element);

});

/*=====================================================
            STAGGER CARD ANIMATION
=====================================================*/

const cards = document.querySelectorAll(

    '.service-card, .skill-card, .tech-card, .project-card, .education-card, .achievement-card'

);



cards.forEach((card,index)=>{

    card.style.transitionDelay = `${index * 0.08}s`;

});



/*=====================================================
            HERO IMAGE PARALLAX
=====================================================*/

const heroImage = document.querySelector('.image-box');

window.addEventListener('scroll',()=>{

    if(!heroImage) return;

    const value = window.scrollY * 0.08;

    heroImage.style.transform = `translateY(${value}px)`;

});



/*=====================================================
            BUTTON RIPPLE EFFECT
=====================================================*/

const buttons = document.querySelectorAll('.btn');

buttons.forEach(button=>{

    button.addEventListener('click',function(e){

        const circle=document.createElement('span');

        const diameter=Math.max(

            this.clientWidth,

            this.clientHeight

        );

        const radius=diameter/2;

        circle.style.width=circle.style.height=

            `${diameter}px`;

        circle.style.left=

            `${e.clientX-this.getBoundingClientRect().left-radius}px`;

        circle.style.top=

            `${e.clientY-this.getBoundingClientRect().top-radius}px`;

        circle.classList.add('ripple');

        const ripple=this.querySelector('.ripple');

        if(ripple){

            ripple.remove();

        }

        this.appendChild(circle);

    });

});

/*=====================================================
            LOADER
=====================================================*/

window.addEventListener("load", () => {

    const loader = document.querySelector(".loader");

    if (!loader) return;

    setTimeout(() => {

        loader.classList.add("hide");

    }, 700);

});

/*=====================================================
            THEME TOGGLE
=====================================================*/

const themeButton = document.querySelector(".theme-btn");

const root = document.documentElement;

const savedTheme = localStorage.getItem("theme");

if(savedTheme){

    root.setAttribute("data-theme", savedTheme);

    updateThemeIcon(savedTheme);

}

function updateThemeIcon(theme){

    if(!themeButton) return;

    const icon = themeButton.querySelector("i");

    icon.className =

        theme === "light"

        ? "fa-solid fa-sun"

        : "fa-solid fa-moon";

}

if(themeButton){

    themeButton.addEventListener("click",()=>{

        const current =

            root.getAttribute("data-theme") === "light"

            ? "light"

            : "dark";

        const next = current === "light"

            ? "dark"

            : "light";

        root.setAttribute("data-theme",next);

        localStorage.setItem("theme",next);

        updateThemeIcon(next);

    });

}

/*=====================================================
            TYPING EFFECT
=====================================================*/

const typingElement = document.querySelector(".typing");

const words = [

    "AI & Machine Learning Engineer"

];

let wordIndex = 0;

let charIndex = 0;

let deleting = false;

function typingEffect(){

    if(!typingElement) return;

    const currentWord = words[wordIndex];

    if(!deleting){

        typingElement.textContent =

            currentWord.substring(0,charIndex++);

        if(charIndex > currentWord.length){

            deleting = true;

            setTimeout(typingEffect,1500);

            return;

        }

    }

    else{

        typingElement.textContent =

            currentWord.substring(0,--charIndex);

        if(charIndex === 0){

            deleting = false;

            wordIndex = (wordIndex+1)%words.length;

        }

    }

    setTimeout(

        typingEffect,

        deleting ? 50 : 100

    );

}

typingEffect();

/*=====================================================
            CONTACT FORM
=====================================================*/

const form = document.querySelector("#contact-form");

if(form){

    form.addEventListener("submit",(e)=>{

        e.preventDefault();

        const inputs = form.querySelectorAll(

            "input, textarea"

        );

        let valid = true;

        inputs.forEach(input=>{

            if(input.value.trim()===""){

                input.style.borderColor="#ff4444";

                valid=false;

            }

            else{

                input.style.borderColor="";

            }

        });

        if(valid){

            alert(

                "✅ Thank you! Your message has been sent."

            );

            form.reset();

        }

        else{

            alert(

                "⚠ Please fill in all fields."

            );

        }

    });

}

/*=====================================================
            CURRENT YEAR
=====================================================*/

const year = document.querySelector(".year");

if(year){

    year.textContent = new Date().getFullYear();

}