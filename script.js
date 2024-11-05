document.getElementById("loginForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Mencegah form submit

  let isValid = true;

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  // Validasi email atau nomor telepon
  if (!validateEmailOrPhone(email)) {
    document.getElementById("emailError").style.display = "block";
    isValid = false;
  } else {
    document.getElementById("emailError").style.display = "none";
  }

  // Validasi panjang password
  if (password.length < 4 || password.length > 60) {
    document.getElementById("passwordError").style.display = "block";
    isValid = false;
  } else {
    document.getElementById("passwordError").style.display = "none";
  }

  if (isValid) {
    alert("Login successful!");
  }
});

function validateEmailOrPhone(input) {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phonePattern = /^\d{10,15}$/;
  return emailPattern.test(input) || phonePattern.test(input);
}
