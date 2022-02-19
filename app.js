console.log("Connected!");

const email = document.querySelector(".email");
const password = document.querySelector(".password");
const submit = document.querySelector(".submit");
const userFeedback = document.querySelector(".output");

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

// Submits form to API endpoint

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

// Cleans form
const cleanFields = () => {
  email.value = "";
  password.value = "";
};

// Handles submit event

const handleSubmit = (e) => {
  console.log(charCheck(password.value));
  charCheck(password.value) === false
    ? (userFeedback.innerText = "Invalid password!")
    : submitForm(e);
  e.preventDefault();
  cleanFields();
};

submit.addEventListener("click", handleSubmit);
