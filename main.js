document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("subscription-form");
  const emailInput = document.getElementById("email");
  const emailError = document.getElementById("email-error");
  const card = document.querySelector(".card");
  const successCard = document.querySelector(".success-card");
  const successEmail = document.getElementById("success-email");
  const dismissBtn = document.querySelector(".btn-dismiss");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const email = emailInput.value.trim();

    if (validateEmail(email)) {
      successEmail.textContent = email;
      card.classList.add("hidden");
      successCard.classList.remove("hidden");
      form.reset();
      emailInput.parentElement.classList.remove("error");
    } else {
      emailInput.parentElement.classList.add("error");
    }
  });

  dismissBtn.addEventListener("click", function () {
    successCard.classList.add("hidden");
    card.classList.remove("hidden");
  });

  emailInput.addEventListener("input", function () {
    if (emailInput.parentElement.classList.contains("error")) {
      emailInput.parentElement.classList.remove("error");
    }
  });

  function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  }
});
