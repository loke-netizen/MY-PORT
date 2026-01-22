// BURGER MENU
const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav-links');

burger.addEventListener('click', () => {
    nav.classList.toggle('nav-active');
    burger.classList.toggle('toggle');
});

// CONTACT FORM
const contactForm = document.getElementById('contactForm');
contactForm.addEventListener('submit', function (e) {
    e.preventDefault();
    alert("Message sent successfully!");
    contactForm.reset();
});
