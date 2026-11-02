

document.addEventListener("DOMContentLoaded", function () {

    const trainingButton = document.getElementById("trainingButton");
    const trainingInfo = document.getElementById("trainingInfo");

    if (trainingButton && trainingInfo) {

        trainingButton.addEventListener("click", function () {

            if (trainingInfo.hidden) {
                trainingInfo.hidden = false;
                trainingButton.textContent = "Hide Training Information";
            } else {
                trainingInfo.hidden = true;
                trainingButton.textContent = "Show Training Information 🌸";
            }

        });

    }

});
