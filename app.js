const form = document.querySelector(".form");
const email = document.querySelector("#email");
const btn = document.querySelector("button");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (!validateEmail(email.value) || email.value.length === 0) {
    form.classList.add("warning");
  } else {
    form.classList.remove("warning");
  }
})

function validateEmail(email) {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}