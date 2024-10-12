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
                    <img src="landing_page_img/cake2.png" alt="Cake 2" class="landing-cake-image">
                    <img src="landing_page_img/cake3.png" alt="Cake 3" class="landing-cake-image">
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
                <h2>Cake Categories</h2>
                <div class="category-list">
                    <div class="category-item">
                        <img src="images/Cake1_Chocolate.jpg" alt="Chocolate Cake" class="category-image" onclick="viewCakeDetails('Chocolate Cake')">
                        <h3>Chocolate Cakes</h3>
                    </div>
                    <div class="category-item">
                        <h3>Vanilla Cakes</h3>
                        <img src="images/vanilla-cake.jpg" alt="Vanilla Cake" class="category-image" onclick="viewCakeDetails('Vanilla Cake')">
                    </div>
                    <div class="category-item">
                        <h3>Red Velvet Cakes</h3>
                        <img src="images/red-velvet-cake.jpg" alt="Red Velvet Cake" class="category-image" onclick="viewCakeDetails('Red Velvet Cake')">
                    </div>
                </div>
            </section>
        `;
    }
    
    function viewCakeDetails(cakeType) {
        // Example cake data, you can replace this with your actual data source
        const cakes = [
            {
                name: "Rich Chocolate Truffle Cake",
                price: 549,
                rating: 4.9,
                reviews: 3565,
                image: "images/rich-chocolate-truffle-cake.jpg",
            },
            {
                name: "Chocolate Vanilla Half & Half Cake",
                price: 549,
                rating: 4.9,
                reviews: 1888,
                image: "images/chocolate-vanilla-cake.jpg",
            },
            {
                name: "Tropical Fruit n Almond Cake",
                price: 699,
                rating: 4.9,
                reviews: 1180,
                image: "images/tropical-fruit-cake.jpg",
            },
            {
                name: "Rose Petals N Pistachio Rasmalai Cake",
                price: 699,
                rating: 4.8,
                reviews: 181,
                image: "images/rose-pistachio-cake.jpg",
            },
            // Add more cakes as needed
        ];
    
        // Filter cakes based on the selected type
        const filteredCakes = cakes.filter(cake => cakeType.toLowerCase() === "chocolate" ? cake.name.includes("Chocolate") : cake.name.includes("Vanilla"));
    
        // Generate HTML for cake details
        let cakeDetailsHTML = `
            <section id="cake-details">
                <h2>${cakeType} Cakes</h2>
                <div class="cake-list">
        `;
    
        filteredCakes.forEach(cake => {
            cakeDetailsHTML += `
                <div class="cake-item">
                    <img src="${cake.image}" alt="${cake.name}" class="cake-image">
                    <h3>${cake.name}</h3>
                    <p>Price: ₹${cake.price}</p>
                    <p>${cake.rating} ⭐ (${cake.reviews} reviews)</p>
                    <button onclick="addToCart('${cake.name}')">Add to Cart</button>
                </div>
            `;
        });
    
        cakeDetailsHTML += `
                </div>
            </section>
        `;
    
        content.innerHTML = cakeDetailsHTML;
    }
    
    // Function to add the selected cake to the cart
    function addToCart(cakeName) {
        alert(`${cakeName} has been added to your cart!`);
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
