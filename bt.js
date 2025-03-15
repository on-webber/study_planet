document.addEventListener("DOMContentLoaded", function () {
    const circle = document.getElementById("circle");
    const arrow = document.getElementById("arrow");
    const label = document.getElementById("label");
    const confirmationModal = document.getElementById("confirmationModal");
    const yesButton = document.getElementById("yesButton");
    const noButton = document.getElementById("noButton");
    const envelope = document.getElementById("envelope");
    const letter = document.getElementById("letter");
    const postBox = document.getElementById("postBox");
    const postVan = document.getElementById("postVan");
  
    // Show confirmation modal on circle click
    circle.addEventListener("click", function () {
      confirmationModal.style.display = "block";
    });
  
    // Handle "Yes" button click
    yesButton.addEventListener("click", function () {
      confirmationModal.style.display = "none";
      circle.style.display = "none";
      label.style.display = "none";
  
      // Show envelope and move arrow into it
      envelope.style.display = "flex";
      setTimeout(() => {
        letter.textContent = "←";
      }, 500);
  
      // Show post box and van
      postBox.style.display = "block";
      postVan.style.display = "block";
  
      // Animate post van moving to the left
      postVan.style.animation = "moveVan 2s forwards";
  
      // Redirect after animation
      setTimeout(() => {
        window.location.href = "index.htm"; // Replace with your previous page URL
      }, 2000);
    });
  
    // Handle "No" button click
    noButton.addEventListener("click", function () {
      confirmationModal.style.display = "none";
    });
  });