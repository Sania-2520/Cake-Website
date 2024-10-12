document.addEventListener("DOMContentLoaded", () => {
    const content = document.getElementById('content');

    // Load Landing Page when website is first opened
    loadLandingPage();

    // Landing Page Event Listener
    document.getElementById('explore-btn').addEventListener('click', loadCategories);

    // Navigation Event Listeners
    document.getElementById('home-link').addEventListener('click', loadLandingPage);
    document.getElementById('categories-link').addEventListener('click', loadCategories);
    document.getElementById('gallery-link').addEventListener('click', loadGallery);
    document.getElementById('testimonials-link').addEventListener('click', loadTestimonials);
    document.getElementById('cart-link').addEventListener('click', loadCart);

    // Load Landing Page
    function loadLandingPage() {
        content.innerHTML = `
            <section id="landing">
                <h1>Welcome to the DreamsCake Delight!</h1>
                <p>Your dream cakes, crafted with love.</p>

                <!-- Cake Images Section -->
                <div class="landing-cakes">
                    <img src="landing_page_img/cake1.png" alt="Cake 1" class="landing-cake-image">
                    <img src="images/cake2.jpg" alt="Cake 2" class="landing-cake-image">
                    <img src="images/cake3.jpg" alt="Cake 3" class="landing-cake-image">
                </div>
                
                <!-- Added margin for spacing -->
                <button id="explore-btn" class="explore-btn">Explore Cakes</button>
            </section>
        `;
        document.getElementById('explore-btn').addEventListener('click', loadCategories);
    }

    // Load Cake Categories
    function loadCategories() {
        content.innerHTML = `
            <section id="categories">
                <h2>Our Cake Categories</h2>
                <div class="category" onclick="showCakeDetails('Chocolate Cake')">Chocolate Cakes</div>
                <div class="category" onclick="showCakeDetails('Fruit Cake')">Fruit Cakes</div>
                <div class="category" onclick="showCakeDetails('Cheesecake')">Cheesecakes</div>
                <div class="category" onclick="showCakeDetails('Cupcakes')">Cupcakes</div>
            </section>
        `;
    }

    // Show Cake Details
    window.showCakeDetails = (cakeType) => {
        content.innerHTML = `
            <section id="cake-details">
                <h2>${cakeType}</h2>
                <p>Here are some delicious ${cakeType.toLowerCase()} options for you!</p>
                <button onclick="addToCart('${cakeType}')">Add to Cart</button>
            </section>
        `;
    }

    // Add to Cart
    window.addToCart = (cakeType) => {
        alert(`${cakeType} has been added to your cart!`);
    }

    // Load Gallery
    function loadGallery() {
        content.innerHTML = `
            <section id="gallery">
                <h2>Photo Gallery</h2>
                <div class="gallery-grid">
                    <img class="gallery-image" src="images/Cake1_Chocolate.jpg" alt="Cake 1">
                    <img class="gallery-image" src="images/Cake2_butterscotch.jpg" alt="Cake 2">
                    <img class="gallery-image" src="images/Cake3_redvelvet.jpg" alt="Cake 3">
                    <img class="gallery-image" src="images/Cake4_blackforest.jpg" alt="Cake 4">
                </div>
            </section>
        `;
    }

    // Load Testimonials
    function loadTestimonials() {
        content.innerHTML = `
            <section id="testimonials">
                <h2>Customer Testimonials</h2>
                <blockquote>"The best cakes I’ve ever tasted!" - Jane</blockquote>
                <blockquote>"My go-to bakery for every celebration." - John</blockquote>
            </section>
        `;
    }

    // Load Shopping Cart
    function loadCart() {
        content.innerHTML = `
            <section id="cart">
                <h2>Your Shopping Cart</h2>
                <p>Your cart is empty!</p>
            </section>
        `;
    }
});
