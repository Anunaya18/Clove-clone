// Hamburger toggle
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');
hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Appointment form
const appointmentForm = document.getElementById('appointmentForm');
const successMsg = document.querySelector('.success-msg');
appointmentForm.addEventListener('submit', (e) => {
  e.preventDefault();
  successMsg.style.display = 'block';
  appointmentForm.reset();
  setTimeout(() => { successMsg.style.display = 'none'; }, 3000);
});

// FAQ Accordion
const faqQuestions = document.querySelectorAll('.faq-question');
faqQuestions.forEach((question) => {
  question.addEventListener('click', () => {
    const answer = question.nextElementSibling;
    if (answer.style.maxHeight) { answer.style.maxHeight = null; }
    else {
      document.querySelectorAll('.faq-answer').forEach((el) => el.style.maxHeight = null);
      answer.style.maxHeight = answer.scrollHeight + "px";
    }
  });
});
