// Elements
const debitButton = document.getElementById("debit-credit-card");
const upiButton = document.getElementById("upi");
const qrButton = document.getElementById("qr-code");

const debitSection = document.getElementById("display-debit-credit");
const upiSection = document.getElementById("display-upi");
const qrSection = document.getElementById("display-qr-code");

// Hide all payment method sections and show all buttons
function hideAllPaymentSections() {
  debitSection.classList.add("d-none");
  upiSection.classList.add("d-none");
  qrSection.classList.add("d-none");

  debitButton.classList.remove("d-none");
  upiButton.classList.remove("d-none");
  qrButton.classList.remove("d-none");
}

// Show Debit/Credit Card form
debitButton.addEventListener("click", function () {
  hideAllPaymentSections();
  debitSection.classList.remove("d-none");
  debitButton.classList.add("d-none");
});

// Show UPI form
upiButton.addEventListener("click", function () {
  hideAllPaymentSections();
  upiSection.classList.remove("d-none");
  upiButton.classList.add("d-none");
});

// Show QR Code form
qrButton.addEventListener("click", function () {
  hideAllPaymentSections();
  qrSection.classList.remove("d-none");
  qrButton.classList.add("d-none");
});

// Format Card Number
const cardInput = document.getElementById("cardNumber");

cardInput.addEventListener("input", function (e) {
  let value = e.target.value.replace(/\D/g, '').slice(0, 16); // Digits only, max 16
  let formatted = value.match(/.{1,4}/g)?.join(' ') ?? '';
  e.target.value = formatted;
});

// Format Expiry Date (MM/YY with auto '/')
const expiryInput = document.getElementById("expiryDate");

expiryInput.addEventListener("input", function (e) {
  let value = e.target.value.replace(/\D/g, '').slice(0, 4); // Only digits, max 4
  if (value.length > 2) {
    value = value.slice(0, 2) + '/' + value.slice(2);
  }
  e.target.value = value;
});

// Validate on Submit
document.getElementById("paymentForm").addEventListener("submit", function (e) {
  const expiryError = document.getElementById("expiryError");
  const cvvError = document.getElementById("cvvError");

  const expiry = expiryInput.value.trim();
  const [monthStr, yearStr] = expiry.split("/");

  const month = parseInt(monthStr, 10);
  const year = parseInt(yearStr, 10);

  const currentDate = new Date();
  const currentMonth = currentDate.getMonth() + 1;
  const currentYear = currentDate.getFullYear() % 100;

  const isValidMonth = month >= 1 && month <= 12;
  const isValidYear = yearStr?.length === 2;
  const isFuture = year > currentYear || (year === currentYear && month >= currentMonth);

  let valid = true;

  if (!isValidMonth || !isValidYear || !isFuture) {
    expiryError.classList.remove("d-none");
    valid = false;
  } else {
    expiryError.classList.add("d-none");
  }

  const cvvInput = document.getElementById("cvv");
  const cvv = cvvInput.value.trim();
  const isValidCVV = /^[0-9]{3,4}$/.test(cvv);

  if (!isValidCVV) {
    cvvError.classList.remove("d-none");
    valid = false;
  } else {
    cvvError.classList.add("d-none");
  }

  if (!valid) {
    e.preventDefault(); // Prevent submission if validation fails
  }
});
