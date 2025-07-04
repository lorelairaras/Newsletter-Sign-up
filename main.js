document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("subscription-form");
  const emailInput = document.getElementById("email");
  const emailError = document.getElementById("email-error");
  const card = document.querySelector(".card");
  const successCard = document.querySelector(".success-card");
  const successEmail = document.getElementById("success-email");
  const dismissBtn = document.querySelector(".btn-dismiss");

  function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  }

  function showError() {
    emailInput.parentElement.classList.add("error");
    emailError.style.display = "block";
  }

  function hideError() {
    emailInput.parentElement.classList.remove("error");
    emailError.style.display = "none";
  }

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const email = emailInput.value.trim();

    if (!email) {
      showError();
      emailError.textContent = "Email is required";
      return;
    }

    if (!validateEmail(email)) {
      showError();
      emailError.textContent = "Valid email required";
      return;
    }

    hideError();
    successEmail.textContent = email;

    card.style.display = "none";
    successCard.style.display = "block";

    form.reset();
  });

  emailInput.addEventListener("input", function () {
    const email = emailInput.value.trim();

    if (email && !validateEmail(email)) {
      showError();
      emailError.textContent = "Valid email required";
    } else {
      hideError();
    }
  });

  dismissBtn.addEventListener("click", function () {
    successCard.style.display = "none";
    card.style.display = "flex";
  });
});
