document.addEventListener("DOMContentLoaded", function () {

    const images = document.querySelectorAll(".gallery img");

    images.forEach(function (image) {

        image.style.cursor = "pointer";

        image.addEventListener("click", function () {

            const overlay = document.createElement("div");

            overlay.style.position = "fixed";
            overlay.style.top = "0";
            overlay.style.left = "0";
            overlay.style.width = "100%";
            overlay.style.height = "100%";
            overlay.style.backgroundColor = "rgba(248, 225, 232, 0.95)";
            overlay.style.display = "flex";
            overlay.style.justifyContent = "center";
            overlay.style.alignItems = "center";
            overlay.style.zIndex = "9999";
            overlay.style.cursor = "zoom-out";
            overlay.style.padding = "20px";
            overlay.style.boxSizing = "border-box";

            const largeImage = document.createElement("img");

            largeImage.src = image.src;
            largeImage.alt = image.alt;
            largeImage.style.maxWidth = "90%";
            largeImage.style.maxHeight = "85%";
            largeImage.style.objectFit = "contain";
            largeImage.style.border = "5px solid #A3B7A1";
            largeImage.style.borderRadius = "20px";

            overlay.appendChild(largeImage);
            document.body.appendChild(overlay);

            function closeImage() {
                overlay.remove();
                document.removeEventListener("keydown", escapeKey);
            }

            function escapeKey(event) {
                if (event.key === "Escape") {
                    closeImage();
                }
            }

            overlay.addEventListener("click", closeImage);
            largeImage.addEventListener("click", function(event) {
                event.stopPropagation();
            });

            document.addEventListener("keydown", escapeKey);
        });

    });

});