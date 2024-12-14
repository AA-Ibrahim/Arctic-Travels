// Modal functionality
const bookingModal = document.getElementById("bookingModal");
const openModalButton = document.getElementById("openBookingForm");
const closeModalButton = document.getElementById("closeModal");

// Open Modal
openModalButton.addEventListener("click", () => {
  bookingModal.style.display = "flex";
});

// Close Modal
closeModalButton.addEventListener("click", () => {
  bookingModal.style.display = "none";
});

// Close modal when clicking outside
window.addEventListener("click", (e) => {
  if (e.target === bookingModal) {
    bookingModal.style.display = "none";
  }
});

// Form Submission
const bookingForm = document.getElementById("bookingForm");
bookingForm.addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Thank you for booking your trip with Arctic Travels!");
  bookingModal.style.display = "none";
  bookingForm.reset();
});
