const ERROR_MSGS = {
  first_name: { null: "This field is required" },
  last_name: { null: "This field is required" },
  email: {
    null: "This field is required",
    invalid: "Please enter a valid email address",
  },
  query_type: { null: "Please select a query type" },
  message: { null: "This field is required" },
  consent: { null: "To submit this form, please consent to being contacted" },
};

function handleNull(value, name) {
  if (!value) {
    console.log(name);
    try {
      document.getElementById(name).classList.add("error");
    } catch (error) { }
    document.getElementById("error_" + name).innerHTML = ERROR_MSGS[name].null;
    return true;
  }
  return false;
}

function showToast() {
  const toast = document.getElementById("toast");
  toast.classList.add("show");
  setTimeout(() => { toast.classList.remove("show"); clearForm(); }, 3000);
}

function clearForm() {
  const fields = ["first_name", "last_name", "email", "message"];
  document.getElementById("query_type_ge").checked = false;
  document.getElementById("query_type_sr").checked = false;
  document.getElementById("consent").checked = false;

  let isValid = true;

  fields.forEach((field) => {
    document.getElementById(field).value = ''
    document.getElementById(field).classList.remove('error')
    document.getElementById(`error_${field}`).innerHTML = ''
  });
  document
  .querySelectorAll(".radio-item")
  .forEach((card) => card.classList.remove("selected"));
  document.getElementById(`error_query_type`).innerHTML = ''
  document.getElementById(`error_consent`).innerHTML = ''
      
}

document.querySelectorAll('input[type="radio"]').forEach((radio) => {
  radio.addEventListener("change", function () {
    document
      .querySelectorAll(".radio-item")
      .forEach((card) => card.classList.remove("selected"));
    this.parentElement.classList.add("selected");
  });
});

function isValidEmail(email) {
  const EMAIL_REGEX = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  return EMAIL_REGEX.test(email);
}

function handleSubmit() {
  const fields = ["first_name", "last_name", "email", "message"];
  const query_type_value =
    document.getElementById("query_type_ge").checked ||
    document.getElementById("query_type_sr").checked;
  const consent_value = document.getElementById("consent").checked;

  let isValid = true;

  fields.forEach((field) => {
    isValid &= !handleNull(document.getElementById(field).value, field);
  });

  if (!isValidEmail(document.getElementById("email").value)) {
    document.getElementById("email").classList.add("error");
    document.getElementById("error_email").innerHTML = ERROR_MSGS.email.invalid;
    isValid &= false;
  }

  isValid &= !handleNull(query_type_value, "query_type");
  isValid &= !handleNull(consent_value, "consent");

  if (!isValid) return;

  showToast();
}
