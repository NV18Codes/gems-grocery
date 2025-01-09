 // Geolocation script
 if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function (position) {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;

        // Display basic GPS-based location
        document.getElementById("location-text").textContent =
            `Current Location: ${latitude.toFixed(2)}, ${longitude.toFixed(2)}`;
    }, function () {
        document.getElementById("location-text").textContent = "Location access denied";
    });
} else {
    document.getElementById("location-text").textContent = "Geolocation not supported";
}

document.addEventListener("DOMContentLoaded", () => {
    const productList = document.getElementById("product-list");
    const products = Array.from(productList.children);
    const prevBtn = document.getElementById("prev-btn");
    const nextBtn = document.getElementById("next-btn");

    let startIndex = 0;
    const visibleProducts = 4;

    // Function to update product visibility
    function updateProducts() {
        products.forEach((product, index) => {
            product.style.display =
                index >= startIndex && index < startIndex + visibleProducts ? "block" : "none";
        });

        prevBtn.disabled = startIndex === 0;
        nextBtn.disabled = startIndex + visibleProducts >= products.length;
    }

    // Event listeners for navigation buttons
    prevBtn.addEventListener("click", () => {
        if (startIndex > 0) {
            startIndex--;
            updateProducts();
        }
    });

    nextBtn.addEventListener("click", () => {
        if (startIndex + visibleProducts < products.length) {
            startIndex++;
            updateProducts();
        }
    });

    // Initialize visibility
    if (products.length > 0) {
        updateProducts();
    } else {
        prevBtn.disabled = true;
        nextBtn.disabled = true;
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const vegetableCards = document.querySelectorAll(".vegetable-card");
    const prevBtn = document.getElementById("prev-btn-vegetables");
    const nextBtn = document.getElementById("next-btn-vegetables");
    let currentIndex = 0;
    const visibleCount = 4; // Number of visible cards at a time

    const updateVegetableCarousel = () => {
        vegetableCards.forEach((card, index) => {
            if (index >= currentIndex && index < currentIndex + visibleCount) {
                card.classList.remove("hidden");
            } else {
                card.classList.add("hidden");
            }
        });

        prevBtn.disabled = currentIndex === 0;
        nextBtn.disabled = currentIndex + visibleCount >= vegetableCards.length;
    };

    prevBtn.addEventListener("click", () => {
        if (currentIndex > 0) {
            currentIndex--;
            updateVegetableCarousel();
        }
    });

    nextBtn.addEventListener("click", () => {
        if (currentIndex + visibleCount < vegetableCards.length) {
            currentIndex++;
            updateVegetableCarousel();
        }
    });

    // Initial load
    updateVegetableCarousel();
});

document.addEventListener("DOMContentLoaded", function () {
    const fruitCards = document.querySelectorAll(".fruit-card");
    const prevBtn = document.getElementById("prev-btn-fruits");
    const nextBtn = document.getElementById("next-btn-fruits");
    let currentIndex = 0;
    const visibleCount = 4; // Number of visible cards at a time

    const updateFruitCarousel = () => {
        fruitCards.forEach((card, index) => {
            if (index >= currentIndex && index < currentIndex + visibleCount) {
                card.classList.remove("hidden");
            } else {
                card.classList.add("hidden");
            }
        });

        prevBtn.disabled = currentIndex === 0;
        nextBtn.disabled = currentIndex + visibleCount >= fruitCards.length;
    };

    prevBtn.addEventListener("click", () => {
        if (currentIndex > 0) {
            currentIndex--;
            updateFruitCarousel();
        }
    });

    nextBtn.addEventListener("click", () => {
        if (currentIndex + visibleCount < fruitCards.length) {
            currentIndex++;
            updateFruitCarousel();
        }
    });

    // Initial load
    updateFruitCarousel();
});

document.addEventListener("DOMContentLoaded", function () {
    const productListDairy = document.getElementById("product-list-dairy");
    const prevBtnDairy = document.getElementById("prev-btn-dairy");
    const nextBtnDairy = document.getElementById("next-btn-dairy");
    const productCardsDairy = document.querySelectorAll(".product-card");
    let currentIndexDairy = 0;
    const visibleCount = 4; // Number of visible cards at a time

    // Set each card to a specific width to show exactly 4 cards
    const cardWidth = 100 / visibleCount;
    productCardsDairy.forEach(card => {
        card.style.flex = `0 0 ${cardWidth}%`;
    });

    const updateDairyCarousel = () => {
        const offset = -(currentIndexDairy * 100 / visibleCount);
        productListDairy.style.transform = `translateX(${offset}%)`;

        prevBtnDairy.disabled = currentIndexDairy === 0;
        nextBtnDairy.disabled = currentIndexDairy + visibleCount >= productCardsDairy.length;
    };

    prevBtnDairy.addEventListener("click", () => {
        if (currentIndexDairy > 0) {
            currentIndexDairy--;
            updateDairyCarousel();
        }
    });

    nextBtnDairy.addEventListener("click", () => {
        if (currentIndexDairy + visibleCount < productCardsDairy.length) {
            currentIndexDairy++;
            updateDairyCarousel();
        }
    });

    // Initial load
    updateDairyCarousel();
});

document.addEventListener('DOMContentLoaded', () => {
    const cart = {};

    document.querySelectorAll('.product-card').forEach(card => {
        const addButton = card.querySelector('.add-button');
        const counter = card.querySelector('.counter');
        const decreaseButton = card.querySelector('.decrease-button');
        const increaseButton = card.querySelector('.increase-button');
        const quantityElement = card.querySelector('.quantity');
        const productName = card.dataset.name;
        const productPrice = parseFloat(card.dataset.price);

        addButton.addEventListener('click', () => {
            addButton.classList.add('hidden');
            counter.classList.remove('hidden');
            cart[productName] = { quantity: 1, price: productPrice };
            updateCart();
        });

        decreaseButton.addEventListener('click', () => {
            if (cart[productName].quantity > 1) {
                cart[productName].quantity--;
            } else {
                delete cart[productName];
                addButton.classList.remove('hidden');
                counter.classList.add('hidden');
            }
            updateCart();
        });

        increaseButton.addEventListener('click', () => {
            z
            cart[productName].quantity++;
            updateCart();
        });

        function updateCart() {
            quantityElement.textContent = cart[productName]?.quantity || 0;
            console.log('Cart:', cart); // Display cart in the console
        }
    });
});

document.getElementById('search-input').addEventListener('input', function () {
    const query = this.value.toLowerCase();
    const productSections = document.querySelectorAll('section');
    let hasResults = false;

    productSections.forEach(section => {
        const products = section.querySelectorAll('.product-card');
        let sectionHasResults = false;

        products.forEach(product => {
            const productName = product.getAttribute('data-name').toLowerCase();
            if (productName.includes(query)) {
                product.style.display = 'block';
                sectionHasResults = true;
            } else {
                product.style.display = 'none';
            }
        });

        // Show or hide the section based on whether any product matches the query
        section.style.display = sectionHasResults ? 'block' : 'none';

        if (sectionHasResults) {
            hasResults = true;
        }
    });

    // Show the "No results" message if no products are found
    document.getElementById('no-results').classList.toggle('hidden', hasResults);
});

const searchInput = document.getElementById('search-input');
        const productList = document.getElementById('product-list');
        const products = Array.from(productList.children);

        searchInput.addEventListener('input', () => {
            const query = searchInput.value.toLowerCase();
            products.forEach(product => {
                const text = product.textContent.toLowerCase();
                product.style.display = text.includes(query) ? 'block' : 'none';
            });
        });