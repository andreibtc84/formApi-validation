console.log("Connected!");

const email = document.querySelector(".email");
const password = document.querySelector(".password");
const submit = document.querySelector(".submit");

// Validation FUNCTIONS:
// At least 8 chars

const atLeast8 = (str) => (str.length >= 8 ? true : false);

// Has at least one lowercase and uppercase letter, number, and a special character

const charCheck = (str) => {
  return (
    /[a-z]/.test(str) &&
    /[A-Z]/.test(str) &&
    /\W|_/g.test(str) &&
    /[0-9]/g.test(str)
  );
};

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
