const form = document.querySelector(".login-form");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const { email, password } = form.elements;
  const userEmail = email.value.trim();
  const userPassword = password.value.trim();

  if (!userEmail || !userPassword) {
    return alert("All form fields must be filled in");
  }

  const userData = {
    email: userEmail,
    password: userPassword,
  };

  console.log(userData);
  form.reset();
});
