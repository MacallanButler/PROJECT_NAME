// Simple booking calendar placeholder
document.addEventListener("DOMContentLoaded", () => {
  const bookingForm = document.getElementById("booking-form");

  bookingForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const sessionType = document.getElementById("session-type").value;
    const gym = document.getElementById("gym-location").value;

    alert(
      `Booking Confirmed!\nName: ${name}\nEmail: ${email}\nSession: ${sessionType}\nGym: ${gym}`
    );

    bookingForm.reset();
  });
});
