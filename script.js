// ===============================
// PassionateTech — script.js
// ===============================

// ---------- LIVE TIME (Milliseconds) ----------
function updateTime() {
  const timeElement = document.getElementById('time');
  if (timeElement) {
    timeElement.textContent = Date.now(); // Shows live milliseconds
  }
}

// Update time every second
setInterval(updateTime, 1000);
updateTime();

// ---------- FOOTER YEAR ----------
const yearElement = document.getElementById('year');
if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}

// ---------- CONTACT FORM VALIDATION ----------
const form = document.getElementById('contact-form');

if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();

    // Get input elements
    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const subject = document.getElementById('subject');
    const message = document.getElementById('message');


    // Get error message placeholders
    const errorName = document.getElementById('error-name');
    const errorEmail = document.getElementById('error-email');
    const errorSubject = document.getElementById('error-subject');
    const errorMessage = document.getElementById('error-message');

    // Reset all errors
    [errorName, errorEmail, errorSubject, errorMessage].forEach(el => {
      if (el) el.textContent = '';
    });

    let isValid = true;

    // Name validation
    if (!name.value.trim()) {
      errorName.textContent = 'Full name is required.';
      isValid = false;
    }

    // Email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.value.trim()) {
      errorEmail.textContent = 'Email is required.';
      isValid = false;
    } else if (!emailPattern.test(email.value.trim())) {
      errorEmail.textContent = 'Enter a valid email (e.g. name@example.com).';
      isValid = false;
    }

    // Subject validation
    if (!subject.value.trim()) {
      errorSubject.textContent = 'Subject is required.';
      isValid = false;
    }

    // Message validation
    if (!message.value.trim()) {
      errorMessage.textContent = 'Message is required.';
      isValid = false;
    } else if (message.value.trim().length < 10) {
      errorMessage.textContent = 'Message must be at least 10 characters long.';
      isValid = false;
    }

    // Success condition
    if (isValid) {
      // Simulate submission and redirect
      alert('Message submitted successfully!');
      window.location.href = 'success.html';
    }
  });
}