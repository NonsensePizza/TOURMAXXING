// =========================
// TOURMAXXING JAVASCRIPT
// =========================


// Find all tour buttons
const tourButtons = document.querySelectorAll(".tour-button");


// Add a click event to every button
tourButtons.forEach(function(button) {

    button.addEventListener("click", function() {

        alert("Tour details will be available soon!");

    });

});