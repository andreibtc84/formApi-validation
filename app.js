console.log("Connected!");

const email = document.querySelector(".email");
const password = document.querySelector(".password");
const submit = document.querySelector(".submit");
const userFeedback = document.querySelector(".output");

// Validation FUNCTIONS:
// At least 8 chars

const atLeast8 = (str) => (str.length >= 8 ? true : false);

// Validate Password. Has at least one lowercase and uppercase letter, number, and a special character

const charCheck = (str) => {
  return (
    /[a-z]/.test(str) &&
    /[A-Z]/.test(str) &&
    /\W|_/g.test(str) &&
    /[0-9]/g.test(str)
  );
};

// Validate email

const validateEmail = () => {
  let re = /\S+@\S+\.\S+/;
  return re.test(email.value);
};

// Submits form to API endpoint

const submitForm = () => {
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
      provideFeedback(data);
    })

    .catch((error) => {
      console.log(error);
    });
};

// Gives user positive feedback

const provideFeedback = (data) => {
  userFeedback.classList.add("outputSucess");
  userFeedback.innerHTML = `<h3>Yey! Entry created successfully:</h3>
      <ul>
        <li>Id: ${data.email}</li>
        <li>Email: ${data.id}</li>
        <li>Created at: ${new Date(data.createdAt)}</li>
      </ul>`;
};

// Cleans form fields
const cleanFields = () => {
  email.value = "";
  password.value = "";
};

// Handles submit event

const handleSubmit = (e) => {
  userFeedback.classList.remove("outputSucess");
  charCheck(password.value) === false
    ? (userFeedback.innerText = "Invalid password!")
    : validateEmail() === false
    ? (userFeedback.innerText = "Invalid email!")
    : submitForm();
  e.preventDefault();
  cleanFields();
};

submit.addEventListener("click", handleSubmit);
