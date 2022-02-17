console.log("Connected!");

const email = document.querySelector(".email");
const password = document.querySelector(".password");
const submit = document.querySelector(".submit");

const submitForm = (e) => {
  e.preventDefault();
  fetch(`https://reqres.in/api/users`, {
    method: "POST",
    body: JSON.stringify({
      email: `${email.value}`,
      password: `${password.value}`,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.log(error);
    });
};

submit.addEventListener("click", submitForm);
