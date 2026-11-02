
document.addEventListener("DOMContentLoaded", function () {

    // Show and hide the contact message
    const contactButton = document.getElementById("contactButton");
    const contactMessage = document.getElementById("contactMessage");

    if (contactButton && contactMessage) {
        contactButton.addEventListener("click", function () {

            if (contactMessage.hidden) {
                contactMessage.hidden = false;
                contactButton.textContent = "Hide Contact Message";
            } else {
                contactMessage.hidden = true;
                contactButton.textContent = "Show Contact Message";
            }

        });
    }

    // Handle the contact form
    const contactForm = document.querySelector("form");

    if (contactForm) {
        contactForm.addEventListener("submit", function (event) {
            event.preventDefault();

            alert("Thank you for contacting Ellinah's Stitch Studio! 🌸");

            contactForm.reset();
        });
    }

});
