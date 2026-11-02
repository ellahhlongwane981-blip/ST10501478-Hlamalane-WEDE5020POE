
document.addEventListener("DOMContentLoaded", function () {

    const searchInput = document.getElementById("pageSearch");
    const products = document.querySelectorAll(".searchable-item");

    if (searchInput) {
        searchInput.addEventListener("input", function () {

            const searchText = searchInput.value.toLowerCase().trim();

            products.forEach(function (product) {

                const productName = product.textContent.toLowerCase();

                if (productName.includes(searchText)) {
                    product.style.display = "";
                } else {
                    product.style.display = "none";
                }

            });

        });
    }

});

