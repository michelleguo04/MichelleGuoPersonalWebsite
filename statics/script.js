// Set footer year
function addYear() {
  const el = document.getElementById("copyYear");
  if (el) el.textContent = new Date().getFullYear();
}

document.addEventListener("DOMContentLoaded", function () {
  addYear();

  // Mobile nav toggle
  const hamburger = document.getElementById("hamburger");
  const navLinks = document.getElementById("navLinks");
  if (hamburger && navLinks) {
    hamburger.addEventListener("click", function () {
      navLinks.classList.toggle("show");
    });
  }

  // Highlight active nav link based on current URL
  const currentPath = window.location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".nav-links a").forEach(link => {
    const href = link.getAttribute("href").split("/").pop();
    if (href === currentPath) {
      link.classList.add("active");
    }
  });

  // Contact form basic validation
  const form = document.getElementById("contactForm");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const comments = document.getElementById("comments").value.trim();
      const msg = document.getElementById("formMessage");

      if (!name || !email || !comments) {
        msg.textContent = "Please fill out all fields.";
        msg.className = "form-message error";
        return;
      }

      const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
      if (!emailValid) {
        msg.textContent = "Please enter a valid email address.";
        msg.className = "form-message error";
        return;
      }

      msg.textContent = "Thank you — your message has been received.";
      msg.className = "form-message success";
      form.reset();
    });
  }
});
