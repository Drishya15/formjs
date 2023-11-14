function validateForm() {
  var firstName = document.getElementById("firstname").value;
  var lastName = document.getElementById("lastname").value;
  var email = document.getElementById("email").value;
  var jobRole = document.getElementById("jobrole").value;
  var address = document.getElementById("address").value;
  var city = document.getElementById("city").value;
  var pincode = document.getElementById("pincode").value;
  var date = document.getElementById("date").value;
  var cv = document.getElementById("cv").value;

  if (
    firstName === "" ||
    lastName === "" ||
    email === "" ||
    jobRole === "" ||
    address === "" ||
    city === "" ||
    pincode === "" ||
    date === "" ||
    cv === ""
  ) {
    alert("Please fill in all fields.");
    return false;
  }
  var emailRegex = /^\S+@\S+\.\S+$/;
  if (!emailRegex.test(email)) {
    alert("Please enter a valid email address.");
    return false;
  }
  var pincodeRegex = /^\d{6}$/;
  if (!pincodeRegex.test(pincode)) {
    alert("Please enter a valid pincode.");
    return false;
  }
  alert("Form submitted successfully!");
  return true;
}