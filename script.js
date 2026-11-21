/* =========================
   WELCOME BUTTON FUNCTION
========================= */

function showMessage() {

    // Find the welcome message
    let message = document.getElementById(
        "welcome-message"
    );

    // Display welcome message
    message.innerHTML =
        "Hello! Thank you for visiting Sweni Patel's Portfolio.";

    // Change message color
    message.style.color = "#7157c5";

    // Make message bold
    message.style.fontWeight = "bold";

}