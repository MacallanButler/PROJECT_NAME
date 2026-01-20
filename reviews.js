document.addEventListener("DOMContentLoaded", () => {
  const reviewForm = document.getElementById("review-form");
  const reviewsSection = document.getElementById("reviews");

  reviewForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("review-name").value;
    const text = document.getElementById("review-text").value;

    // Create new review element
    const newReview = document.createElement("div");
    newReview.classList.add("review");
    newReview.innerHTML = `<p><strong>${name}</strong>: ${text}</p><span>[Verified]</span>`;

    // Append to reviews section
    reviewsSection.appendChild(newReview);

    // Reset the form
    reviewForm.reset();
  });
});
