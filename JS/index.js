

// ==========================================
// ១. ទិន្នន័យផលិតផលទាំង ១០ (Products Array)
// ==========================================
AOS.init({
    duration: 800, // ល្បឿនចលនា
    offset: 120,   // ចម្ងាយគិតពីបាតអេក្រង់
    once: true     // បញ្ចេញចលនាតែម្ដងគត់ (មិនបញ្ចេញឡើងវិញពេល scroll ឡើងលើ)
});
const products = [
    { id: 1, name: "Apex Raptor Gaming PC", brand: "MSI", category: "Pre-Built Rigs", price: 1899, specs: "RTX 4070 Ti, Ryzen 7, 32GB RAM", img: "https://images.unsplash.com/photo-1591488320449-011701bb6704?w=400" },
    { id: 2, name: "Ultra-Wide 4K Monitor", brand: "Asus", category: "Monitors", price: 450, specs: "34-Inch, 144Hz, Curved Display", img: "https://images.unsplash.com/photo-1547082299-de196ea013d6?w=400" },
    { id: 3, name: "RGB Mechanical Keyboard", brand: "Razer", category: "Peripherals", price: 120, specs: "Hot-swappable tactile switches", img: "https://modx-bucket.s3.ap-south-1.amazonaws.com/modx/1754118095066-amd-custom-pc-Photoroom.webp" },
    { id: 4, name: "Precision Gaming Mouse", brand: "Razer", category: "Peripherals", price: 85, specs: "26K DPI, Ultra-lightweight", img: "https://images.pexels.com/photos/7199194/pexels-photo-7199194.jpeg?cs=srgb&dl=pexels-sharad-7199194.jpg&fm=jpg" },
    { id: 5, name: "Creator Pro Workstation", brand: "Dell", category: "Pre-Built Rigs", price: 2499, specs: "Intel i9, 64GB RAM, RTX 4080", img: "https://images.unsplash.com/photo-1552831388-6a0b3575b32a?w=400" },
    { id: 6, name: "Wireless Noise-Canceling Headset", brand: "HP", category: "Audio", price: 199, specs: "Spatial Audio, 40hr Battery", img: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400" },
    { id: 7, name: "NVMe M.2 SSD 2TB", brand: "Corsair", category: "Storage", price: 160, specs: "7450 MB/s Sequential Read", img: "https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?w=400" },
    { id: 8, name: "Z790 Motherboard WiFi", brand: "Asus", category: "Components", price: 299, specs: "DDR5 support, PCIe 5.0", img: "https://www.store.pcimage.com.my/image/shoppcimage/image/cache/data/all_product_images/product-17095/4IYqebyq1757564655-420x420.jpg" },
    { id: 9, name: "Dual-Chamber PC Case", brand: "Corsair", category: "Components", price: 140, specs: "Tempered Glass, Panoramic View", img: "https://images.unsplash.com/photo-1625842268584-8f3296236761?w=400" },
    { id: 10, name: "Liquid CPU Cooler AIO", brand: "Corsair", category: "Components", price: 180, specs: "360mm Radiator, RGB Pump", img: "https://images.unsplash.com/photo-1587202372775-e229f172b9d7?w=400" },

    { id: 11, name: "NVIDIA RTX 4090 GPU", brand: "MSI", category: "Components", price: 1599, specs: "24GB GDDR6X, Ada Lovelace Architecture", img: "https://t3.ftcdn.net/jpg/02/41/19/92/360_F_241199202_tHz63ApcgcNaopJ5BEmoY4IbJrYEucwd.jpg" },
    { id: 12, name: "AMD Ryzen 9 7950X CPU", brand: "Asus", category: "Components", price: 549, specs: "16 Cores, 32 Threads, 5.7GHz Max Boost", img: "https://cdn.originpc.com/img/products/gaming-desktops-2025.jpg" },
    { id: 13, name: "DDR5 RGB RAM 32GB", brand: "Corsair", category: "Components", price: 145, specs: "6000MHz, CL30, Dual Kit (2x16GB)", img: "https://images.unsplash.com/photo-1541029071515-84cc54f84dc5?w=400" },
    { id: 14, name: "Gaming Desk L-Shaped", brand: "Lenovo", category: "Peripherals", price: 210, specs: "Carbon Fiber Finish, Cable Tray, LED", img: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=400" },
    { id: 15, name: "Esports Pro 240Hz Monitor", brand: "Dell", category: "Monitors", price: 320, specs: "24.5-Inch, 0.5ms Response, Fast IPS", img: "https://images.unsplash.com/photo-1551645120-d70bfe84c826?w=400" },
    { id: 16, name: "Studio Microphone XLR", brand: "HP", category: "Audio", price: 130, specs: "Cardioid Pattern, Pop Filter Included", img: "https://images.unsplash.com/photo-1520520731457-9283dd14aa66?w=400" },
    { id: 17, name: "External HDD 4TB", brand: "Lenovo", category: "Storage", price: 110, specs: "USB 3.2, Shock-resistant Portable Drive", img: "https://upload.wikimedia.org/wikipedia/commons/0/04/MSI-Gaming-PC_2024-09-30.png" },
    { id: 18, name: "Budget Starter PC", brand: "Lenovo", category: "Pre-Built Rigs", price: 799, specs: "GTX 1660 Super, Intel i5, 16GB RAM", img: "https://images.unsplash.com/photo-1542393545-10f5cde2c810?w=400" },
    { id: 19, name: "Streamer Ring Light & Stand", brand: "HP", category: "Peripherals", price: 65, specs: "10-Inch, Dimmable Colors, Tripod", img: "https://cdn.originpc.com/img/landing/shop-by-pages/gaming/nextgengamingpower.jpg" },
    { id: 20, name: "Full Tower Premium Case", brand: "MSI", category: "Components", price: 230, specs: "XL ATX Support, Airflow Mesh Panel", img: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=400" },

    // 🆕 បន្ថែម ៥ មុខទៀត (ID 21 - 25)
    { id: 21, name: "MacBook Pro M3 Max", brand: "Apple", category: "Laptops", price: 3199, specs: "14-Core CPU, 30-Core GPU, 36GB Unified Memory", img: "https://cdn.arstechnica.net/wp-content/uploads/2023/11/IMG_1415.jpeg" },
    { id: 22, name: "Stream Deck MK.2 Studio", brand: "Corsair", category: "Peripherals", price: 149, specs: "15 Customizable LCD Keys, Smart Profiles", img: "https://images.unsplash.com/photo-1614149162883-504ce4d13909?w=400" },
    { id: 23, name: "Dell XPS 15 OLED", brand: "Dell", category: "Laptops", price: 1999, specs: "Intel i7, 32GB RAM, 1TB SSD, RTX 4050", img: "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=400" },
    { id: 24, name: "Asus ROG Phone 8 Pro", brand: "Asus", category: "Gaming Phones", price: 1199, specs: "Snapdragon 8 Gen 3, 24GB RAM, 1TB Storage", img: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400" },
    { id: 25, name: "Razer Iskur Gaming Chair", brand: "Razer", category: "Furniture", price: 499, specs: "Ergonomic Lumbar Support System, PVC Leather", img: "https://assets2.razerzone.com/images/pnx.assets/eeba0d6a5accbd492283b9813ff227c9/768x460-iskurblackxl-hero-mobile.webp" }
];
let cart = [];
const DISCOUNT_RATE = 0; // បញ្ចុះតម្លៃ ១៥%

function renderProducts() {
    const container = document.getElementById('product-container');
    if (!container) return;

    container.innerHTML = "";

    products.forEach((product, index) => {
        const delay = (index % 4) * 100;

        // ទំហំ col-6 លើ Mobile និង col-xl-3 លើ Desktop
        container.innerHTML += `
            <div class="col-6 col-md-6 col-lg-4 col-xl-3" data-aos="fade-up" data-aos-delay="${delay}">
                <div class="card h-100 pc-card shadow-sm cursor-pointer position-relative" onclick="openQuickView(${product.id})">
                    
                    <div class="img-wrapper position-relative">
                        <img src="${product.img}" class="card-img-top" alt="${product.name}">
                        
                        <span class="position-absolute top-0 start-0 m-3 badge glass-badge rounded-pill px-3 py-2">
                            ${product.category}
                        </span>
                    </div>

                    <div class="card-body d-flex flex-column p-3 p-md-4">
                        <h6 class="card-title fw-bold text-dark mb-1 text-truncate">${product.name}</h6>
                        <p class="card-text text-secondary small flex-grow-1 mb-2 text-truncate-2">${product.specs}</p>
                        
                        <hr class="border-light opacity-50 my-2">

                        <div class="d-flex justify-content-between align-items-center mt-auto pt-1">
                            <div>
                                <span class="text-muted small d-block" style="font-size: 0.7rem;">Price</span>
                                <span class="fs-5 fw-bold text-primary">$${product.price}</span>
                            </div>
                            
                            <button class="btn btn-primary rounded-pill px-3 btn-sm fw-semibold shadow-sm" 
                                    onclick="event.stopPropagation(); addToCart(${product.id}, 1)">
                                <i class="bi bi-cart-plus me-1"></i> Add
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        `;
    });
}
function renderProduct(productList) { // 📥 ត្រូវប្រាកដថាបានទទួល productList ជា Parameter
    const container = document.getElementById('product-container');
    if (!container) return;

    // ១. សម្អាតកាតចាស់ៗចេញសិនជានិច្ច
    container.innerHTML = "";

    // ២. ឆែកមើលថាតើមានទំនិញក្នុង List ដែលបានបញ្ជូនមកដែរឬទេ
    if (!productList || productList.length === 0) {
        container.innerHTML = `
            <div class="col-12 text-center text-secondary py-5">
                <i class="bi bi-search fs-1 mb-3 d-block text-muted"></i>
                <p>រកមិនឃើញផលិតផលដែលបងកំពុងស្វែងរកទេ!</p>
            </div>
        `;
        return;
    }

    // ៣. រត់ Loop លើ productList (មិនមែន products ទេ ដើម្បីឱ្យស្វែងរកដើរ)
    productList.forEach((product, index) => {
        const delay = (index % 4) * 100; // Animation delay សម្រាប់ AOS

        container.innerHTML += `
            <div class="col-6 col-md-6 col-lg-4 col-xl-3 mb-4" data-aos="fade-up" data-aos-delay="${delay}">
                <div class="card h-100 pc-card shadow-sm cursor-pointer position-relative border-0 rounded-4 overflow-hidden" onclick="openQuickView(${product.id})">
                    
                    <div class="img-wrapper position-relative" style="height: 180px;">
                        <img src="${product.img}" class="w-100 h-100" style="object-fit: cover; transition: transform 0.3s;" onmouseover="this.style.transform='scale(1.05)'" onmouseout="this.style.transform='scale(1)'" alt="${product.name}">
                        
                        <span class="position-absolute top-0 start-0 m-2 badge bg-dark bg-opacity-50 text-white rounded-pill px-3 py-2 small">
                            ${product.category}
                        </span>
                    </div>

                    <div class="card-body d-flex flex-column p-3">
                        <h6 class="card-title fw-bold text-dark mb-1 text-truncate" style="font-size: 0.9rem;">${product.name}</h6>
                        <p class="card-text text-secondary small flex-grow-1 mb-2 text-truncate" style="font-size: 0.8rem;">${product.specs}</p>
                        
                        <hr class="border-light opacity-50 my-2">

                        <div class="d-flex justify-content-between align-items-center mt-auto pt-1">
                            <div>
                                <span class="text-muted d-block" style="font-size: 0.65rem;">តម្លៃ</span>
                                <span class="fw-bold text-primary" style="font-size: 1rem;">$${product.price.toFixed(2)}</span>
                            </div>
                            
                            <button class="btn btn-primary rounded-pill px-3 btn-sm fw-bold shadow-sm d-flex align-items-center" style="font-size: 0.75rem;" 
                                    onclick="event.stopPropagation(); addToCart(${product.id}, 1)">
                                <i class="bi bi-cart-plus me-1"></i> ទិញ
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        `;
    });
}
// ==========================================
// ៣. មុខងារ Quick View Modal
// ==========================================
function openQuickView(productId) {
    // រកផលិតផលក្នុង Array តាមរយៈ ID
    const product = products.find(p => p.id === productId);

    if (product) {
        // បំពេញទិន្នន័យចូលក្នុង Modal Inputs/Elements
        document.getElementById('modalImage').src = product.img;
        document.getElementById('modalName').innerText = product.name;
        document.getElementById('modalCategory').innerText = product.category;
        document.getElementById('modalPrice').innerText = `$${product.price.toFixed(2)}`; // បន្ថែម .toFixed(2) ដើម្បីឱ្យចេញក្បៀសស្អាត
        document.getElementById('modalSpecs').innerText = product.specs || "មិនមានការបញ្ជាក់លម្អិតទេ (No specs available).";

        // Reset ចំនួនទំនិញឱ្យស្មើ ១ ជានិច្ចពេលបើកដំបូង
        document.getElementById('modalQty').value = 1;

        // ចាប់យកប៊ូតុង Add to Cart
        const addBtn = document.getElementById('modalAddToCartBtn');

        // ✅ ប្រើ onclick ជំនួស addEventListener ដើម្បីជៀសវាងការបូកបញ្ចូល Event ច្រើនដង (Memory Leak)
        addBtn.onclick = function () {
            const qty = parseInt(document.getElementById('modalQty').value);

            // បញ្ជូន ID និង ចំនួនទៅកាន់ Function Add to Cart ធំរបស់បង
            addToCart(productId, qty);

            // បិទ Modal បន្ទាប់ពីទិញរួច
            const modalElement = document.getElementById('productModal');

            // ប្រើ getInstance ដើម្បីពិនិត្យមើលថាតើ Modal កំពុងបើកមែនទេ បើបើកទើបបិទ (ការពារ Error)
            let modalInstance = bootstrap.Modal.getInstance(modalElement);
            if (!modalInstance) {
                modalInstance = new bootstrap.Modal(modalElement);
            }
            modalInstance.hide();
        };

        // បង្ហាញ Modal ឡើងមក
        let myModal = bootstrap.Modal.getInstance(document.getElementById('productModal'));
        if (!myModal) {
            myModal = new bootstrap.Modal(document.getElementById('productModal'));
        }
        myModal.show();
    }
}

function changeQty(amount) {
    const qtyInput = document.getElementById('modalQty');
    let currentQty = parseInt(qtyInput.value);

    // បើបំពេញលេខផ្សេងដែលមិនមែនជាលេខ (NaN) ឱ្យស្មើ ១
    if (isNaN(currentQty)) currentQty = 1;

    currentQty += amount;

    if (currentQty < 1) currentQty = 1;
    qtyInput.value = currentQty;
}

// ==========================================
// ៤. មុខងារ Shopping Cart (Add, Change, Remove, Calc)
// ==========================================
function addToCart(productId, quantity = 1) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    const existingItem = cart.find(item => item.id === productId);

    if (existingItem) {
        existingItem.qty += quantity;
    } else {
        cart.push({
            id: product.id,
            name: product.name,
            price: product.price,
            qty: quantity,
            img: product.img
        });
    }

    renderCart();
    // alert(`បានបន្ថែម "${product.name}" ទៅក្នុង Cart ជោគជ័យ!`);
}

function renderCart() {
    const cartList = document.getElementById("cartItemsList");
    if (!cartList) return;

    cartList.innerHTML = "";

    if (cart.length === 0) {
        cartList.innerHTML = `
            <div class="text-center text-secondary py-5">
                <i class="bi bi-cart-x fs-1 d-block mb-3"></i>
                <p>មិនទាន់មានទំនិញក្នុងកញ្ចប់នៅឡើយទេ!</p>
            </div>
        `;
        calculateTotal();
        updateCartBadge();
        return;
    }

    cart.forEach(item => {
        cartList.innerHTML += `
            <div class="d-flex align-items-center mb-3 p-2 bg-white rounded-3 shadow-sm border position-relative">
                <img src="${item.img}" class="rounded-3 me-3" style="width: 70px; height: 70px; object-fit: cover;" alt="${item.name}">
                <div class="flex-grow-1">
                    <h6 class="fw-bold mb-1 small text-truncate" style="max-width: 160px;">${item.name}</h6>
                    <span class="text-primary fw-bold small">$${item.price}</span>
                    
                    <div class="input-group input-group-sm mt-1" style="max-width: 100px;">
                        <button class="btn btn-outline-secondary py-0" onclick="changeCartQty(${item.id}, -1)"><i class="bi bi-dash"></i></button>
                        <input type="number" class="form-control form-control-sm text-center fw-bold px-0" value="${item.qty}" readonly>
                        <button class="btn btn-outline-secondary py-0" onclick="changeCartQty(${item.id}, 1)"><i class="bi bi-plus"></i></button>
                    </div>
                </div>
                <button class="btn btn-link text-danger p-0 position-absolute top-0 end-0 mt-2 me-2" onclick="removeFromCart(${item.id})" style="font-size: 1.1rem;">
                    <i class="bi bi-trash3-fill"></i>
                </button>
            </div>
        `;
    });

    calculateTotal();
    updateCartBadge();
}

function calculateTotal() {
    let subtotal = 0;
    cart.forEach(item => {
        subtotal += item.price * item.qty;
    });

    let discount = subtotal * DISCOUNT_RATE;
    let total = subtotal - discount;

    const subtotalEl = document.getElementById("subtotalPrice");
    const discountEl = document.getElementById("discountPrice");
    const totalEl = document.getElementById("totalPrice");

    if (subtotalEl) subtotalEl.innerText = `$${subtotal.toFixed(2)}`;
    if (discountEl) discountEl.innerText = `-$${discount.toFixed(2)}`;
    if (totalEl) totalEl.innerText = `$${total.toFixed(2)}`;
}

function changeCartQty(productId, amount) {
    const item = cart.find(p => p.id === productId);
    if (item) {
        item.qty += amount;
        if (item.qty <= 0) {
            removeFromCart(productId);
        } else {
            renderCart();
        }
    }
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    renderCart();
}

function updateCartBadge() {
    const badge = document.getElementById("cartCount");
    if (badge) {
        badge.innerText = cart.length;
    }
}


// ==========================================
// ៥. ដំណើរការការងារនៅពេល Web Load រួចរាល់
// ==========================================
document.addEventListener("DOMContentLoaded", function () {
    // បង្ហាញ Products និង Cart ទទេ
    renderProducts();
    renderCart();

    // គ្រប់គ្រង Contact Form
    const contactForm = document.getElementById("contactForm");
    if (contactForm) {
        contactForm.addEventListener("submit", function (e) {
            e.preventDefault();

            const name = document.getElementById("userName").value;
            const subject = document.getElementById("subject").value;

            alert(`Thank you, ${name}! Your message regarding "${subject}" has been submitted successfully. We will contact you soon.`);
            contactForm.reset();
        });
    }

});

// មុខងាររក្សាទុកទិន្នន័យ Cart ចូលទៅក្នុង Browser មុនពេលទៅ Checkout
function saveCartAndCheckout() {
    if (cart.length === 0) {
        alert("សូមជ្រើសរើសទំនិញចូលក្នុង Cart របស់អ្នកជាមុនសិន!");
        return;
    }
    // រក្សាទុក Array ទំនិញក្នុង localStorage ក្រោមឈ្មោះ 'checkoutCart'
    localStorage.setItem('checkoutCart', JSON.stringify(cart));

    // បញ្ជូនទៅកាន់ទំព័រ checkout.html
    window.location.href = "checkout.html";
}
// មុខងារ Filter ទំនិញតាម Category
function filterProducts(categoryName) {
    const container = document.getElementById('product-container');
    if (!container) return;

    container.innerHTML = ""; // សម្អាតទិន្នន័យចាស់

    // ១. ច្រោះយកទិន្នន័យ (Filter Data)
    let filteredProducts = products;
    if (categoryName !== 'all') {
        filteredProducts = products.filter(p => p.category === categoryName);
    }

    if (filteredProducts.length === 0) {
        container.innerHTML = `
            <div class="col-12 text-center py-5">
                <i class="bi bi-box-seam fs-1 text-secondary mb-3"></i>
                <p class="text-secondary">សុំទោស! មិនទាន់មានទំនិញក្នុងប្រភេទនេះនៅឡើយទេ។</p>
            </div>
        `;
        return;
    }

    // ២. Render ទំនិញដែលបានច្រោះរួច (Filtered) មកលើ Screen
    filteredProducts.forEach((product, index) => {
        const delay = (index % 4) * 100;

        container.innerHTML += `
            <div class="col-6 col-md-6 col-lg-4 col-xl-3" data-aos="fade-up" data-aos-delay="${delay}">
                <div class="card h-100 pc-card shadow-sm cursor-pointer position-relative" onclick="openQuickView(${product.id})">
                    <div class="img-wrapper position-relative" style="height: 200px; overflow: hidden; border-top-left-radius: 16px; border-top-right-radius: 16px;">
                        <img src="${product.img}" class="card-img-top w-100 h-100" style="object-fit: cover;" alt="${product.name}">
                        <span class="position-absolute top-0 start-0 m-3 badge bg-white text-primary rounded-pill px-3 py-2 shadow-sm">
                            ${product.category}
                        </span>
                    </div>
                    <div class="card-body d-flex flex-column p-3">
                        <h6 class="card-title fw-bold text-dark mb-1 text-truncate">${product.name}</h6>
                        <p class="card-text text-secondary small flex-grow-1 mb-2 text-truncate">${product.specs}</p>
                        <hr class="border-light opacity-50 my-2">
                        <div class="d-flex justify-content-between align-items-center mt-auto pt-1">
                            <div>
                                <span class="text-muted small d-block" style="font-size: 0.7rem;">Price</span>
                                <span class="fs-5 fw-bold text-primary">$${product.price}</span>
                            </div>
                            <button class="btn btn-primary rounded-pill px-3 btn-sm fw-semibold shadow-sm" onclick="event.stopPropagation(); addToCart(${product.id}, 1)">
                                <i class="bi bi-cart-plus me-1"></i> Add
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        `;
    });

    // បន្ទាប់ពី Render រួច ហក់ទៅកាន់ Section ផលិតផលអូតូ ដើម្បីឱ្យ User ឃើញទំនិញ
    document.getElementById('products').scrollIntoView({ behavior: 'smooth' });
}


// ១. បង្កើត Object ដើម្បីរៀបចំ Icon និង Subtext ឱ្យត្រូវតាម Category នីមួយៗ
const categorySettings = {
    "Pre-Built Rigs": { icon: "bi-pc-display-horizontal", subtext: "Plug & Play" },
    "Monitors": { icon: "bi-display", subtext: "4K & Gaming" },
    "Peripherals": { icon: "bi-keyboard", subtext: "Mouse & Keyboards" },
    "Audio": { icon: "bi-headphones", subtext: "Gaming Audio" },
    "Storage": { icon: "bi-hdd-fill", subtext: "SSD & HDD" },
    "Components": { icon: "bi-motherboard", subtext: "PC Parts" }
};

// ២. មុខងារ Loop Category ចេញពី Array ផលិតផលពិតប្រាកដ
function renderCategories() {
    const categoryContainer = document.getElementById('category-list');
    if (!categoryContainer) return;

    categoryContainer.innerHTML = ""; // សម្អាតទិន្នន័យចាស់

    // ត្រងយកតែឈ្មោះ Category ដែលមិនជាន់គ្នា (Unique Categories)
    const uniqueCategories = [...new Set(products.map(p => p.category))];

    uniqueCategories.forEach((cat, index) => {
        const delay = (index + 1) * 100;

        // ទាញយក Icon តាម Setting បើអត់មានគឺទាញយក Icon ផ្សេង (Default)
        const settings = categorySettings[cat] || { icon: "bi-box-seam", subtext: "Hardware" };

        categoryContainer.innerHTML += `
            <div class="col-6 col-md-3" data-aos="fade-up" data-aos-delay="${delay}">
                <div class="p-4 bg-light bg-opacity-50 rounded-4 h-100 category-box border-0 shadow-sm d-flex flex-column align-items-center justify-content-center"
                    onclick="filterProducts('${cat}')">
                    <div class="p-3 bg-white rounded-circle shadow-sm mb-3 d-flex align-items-center justify-content-center"
                        style="width: 70px; height: 70px;">
                        <i class="bi ${settings.icon} fs-2 text-primary"></i>
                    </div>
                    <h6 class="fw-bold text-dark mb-1">${cat}</h6>
                    <small class="text-secondary">${settings.subtext}</small>
                </div>
            </div>
        `;
    });
}

// ៣. កុំភ្លេចហៅវាឱ្យរត់នៅក្នុង DOMContentLoaded
document.addEventListener("DOMContentLoaded", function () {
    renderProducts();      // Render ផលិតផល
    renderCategories();    // 🆕 ហៅ Loop Category ឱ្យរត់
    renderCart();          // Render កញ្ចប់ទំនិញ
});
document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');

    navLinks.forEach(link => {
        link.addEventListener('click', function () {
            // ១. ដក class 'active' ចេញពីគ្រប់ Links ទាំងអស់
            navLinks.forEach(nav => nav.classList.remove('active', 'text-primary'));

            // ២. បន្ថែម class 'active' ទៅលើ Link ដែលយើងចុច
            this.classList.add('active', 'text-primary');
        });
    });
});

function viewOrderDetails(invoiceId, status, subtotal, discount, paymentMethod) {
    // បញ្ចូលទិន្នន័យទៅកាន់ UI Modal
    document.getElementById('detailInvoiceId').innerText = invoiceId;
    document.getElementById('detailStatus').innerText = status;
    document.getElementById('detailSubtotal').innerText = `$${subtotal.toFixed(2)}`;
    document.getElementById('detailDiscount').innerText = `-$${discount.toFixed(2)}`;
    document.getElementById('detailTotal').innerText = `$${(subtotal - discount).toFixed(2)}`;

    // ប្ដូរ Icon នៃការបង់ប្រាក់
    const paymentEl = document.getElementById('detailPayment');
    if (paymentMethod === 'ABA') {
        paymentEl.innerHTML = `<i class="bi bi-bank me-1 text-primary"></i> វេរតាមធនាគារ ABA`;
    } else {
        paymentEl.innerHTML = `<i class="bi bi-cash-coin me-1 text-success"></i> នៅពេលទទួលទំនិញ`;
    }

    // Render ទំនិញគំរូ
    const itemsContainer = document.getElementById('orderDetailItems');
    itemsContainer.innerHTML = `
        <div class="d-flex align-items-center justify-content-between mb-2 p-2 bg-white rounded-3 border">
            <div class="d-flex align-items-center">
                <div class="bg-light rounded-3" style="width: 45px; height: 45px;">
                    <img src="https://images.unsplash.com/photo-1591488320449-011701bb6704?w=100" class="w-100 h-100 rounded-3" style="object-fit: cover;">
                </div>
                <div class="ms-2">
                    <h6 class="fw-bold mb-0 small text-truncate" style="max-width: 140px;">Apex Raptor PC</h6>
                    <small class="text-secondary">ចំនួន៖ ១</small>
                </div>
            </div>
            <span class="fw-bold text-dark small">$1,899.00</span>
        </div>
    `;

    // បើក Modal ព័ត៌មានលម្អិត
    const myModal = new bootstrap.Modal(document.getElementById('orderDetailsModal'));
    myModal.show();
}


// ១. មុខងារទាញយកប្រវត្តិកុម្ម៉ង់ទិញមកបង្ហាញ (Dynamic Order History)
function renderOrderHistory() {
    const historyContainer = document.getElementById('orderHistoryList');
    if (!historyContainer) return;

    // ទាញយកទិន្នន័យពី LocalStorage (បើគ្មានទេ ឱ្យស្មើ Array ទទេ)
    const pastOrders = JSON.parse(localStorage.getItem('pastOrders')) || [];

    if (pastOrders.length === 0) {
        historyContainer.innerHTML = `
            <div class="text-center text-secondary py-5">
                <i class="bi bi-bag-x fs-1 mb-3 d-block text-muted"></i>
                <p class="mb-0">មិនទាន់មានប្រវត្តិនៃការបញ្ជាទិញនៅឡើយទេ។</p>
            </div>
        `;
        return;
    }

    historyContainer.innerHTML = ""; // សម្អាតទិន្នន័យចាស់

    // រត់ Loop បង្ហាញវិក្កយបត្រនីមួយៗ
    pastOrders.forEach((order, index) => {
        // កំណត់ពណ៌តាម Status
        let statusBadge = "";
        if (order.status === "ជោគជ័យ") {
            statusBadge = `<span class="badge bg-success bg-opacity-10 text-success px-3 py-2 rounded-pill fw-bold">ជោគជ័យ</span>`;
        } else {
            statusBadge = `<span class="badge bg-warning bg-opacity-10 text-warning px-3 py-2 rounded-pill fw-bold">${order.status}</span>`;
        }

        historyContainer.innerHTML += `
            <div class="card border-0 rounded-3 shadow-sm mb-3 bg-white">
                <div class="card-body p-3">
                    <div class="d-flex justify-content-between align-items-center mb-2">
                        <div>
                            <h6 class="fw-bold mb-0 text-dark">វិក្កយបត្រ #${order.invoiceId}</h6>
                            <small class="text-secondary">កាលបរិច្ឆេទ៖ ${order.date}</small>
                        </div>
                        ${statusBadge}
                    </div>
                    <hr class="my-2 border-light opacity-50">
                    <div class="d-flex justify-content-between align-items-center">
                        <div>
                            <small class="text-secondary d-block">ទំនិញសរុប៖ ${order.itemsCount} មុខ</small>
                            <span class="fw-bold text-primary">$${order.total.toFixed(2)}</span>
                        </div>
                        <button class="btn btn-outline-primary btn-sm rounded-pill px-3"
                            onclick="openDynamicOrderDetails(${index})">
                            មើលព័ត៌មានលម្អិត
                        </button>
                    </div>
                </div>
            </div>
        `;
    });
}

// ២. មុខងារចុចមើលព័ត៌មានលម្អិត នៃ Order ពិតប្រាកដនីមួយៗ
function openDynamicOrderDetails(orderIndex) {
    const pastOrders = JSON.parse(localStorage.getItem('pastOrders')) || [];
    const order = pastOrders[orderIndex];

    if (!order) return;

    // បញ្ចូលទិន្នន័យទៅ Order Details Modal (កូដចាស់របស់បង)
    document.getElementById('detailInvoiceId').innerText = `#${order.invoiceId}`;
    document.getElementById('detailStatus').innerText = order.status;
    document.getElementById('detailSubtotal').innerText = `$${order.subtotal.toFixed(2)}`;
    document.getElementById('detailDiscount').innerText = `-$${order.discount.toFixed(2)}`;
    document.getElementById('detailTotal').innerText = `$${order.total.toFixed(2)}`;

    // បង្ហាញទំនិញនៅក្នុងវិក្កយបត្រនោះ
    const itemsContainer = document.getElementById('orderDetailItems');
    itemsContainer.innerHTML = "";

    order.items.forEach(item => {
        itemsContainer.innerHTML += `
            <div class="d-flex align-items-center justify-content-between mb-2 p-2 bg-white rounded-3 border">
                <div class="d-flex align-items-center">
                    <div class="bg-light rounded-3" style="width: 45px; height: 45px;">
                        <img src="${item.img}" class="w-100 h-100 rounded-3" style="object-fit: cover;">
                    </div>
                    <div class="ms-2">
                        <h6 class="fw-bold mb-0 small text-truncate" style="max-width: 140px;">${item.name}</h6>
                        <small class="text-secondary">ចំនួន៖ ${item.qty}</small>
                    </div>
                </div>
                <span class="fw-bold text-dark small">$${(item.price * item.qty).toFixed(2)}</span>
            </div>
        `;
    });

    // បើកផ្ទាំងព័ត៌មានលម្អិត
    const detailsModal = new bootstrap.Modal(document.getElementById('orderDetailsModal'));
    detailsModal.show();
}

// ៣. កុំភ្លេចហៅវាឱ្យរត់នៅពេលបើក Modal ឡើង
document.addEventListener("DOMContentLoaded", function () {
    const ordersModalEl = document.getElementById('ordersModal');
    if (ordersModalEl) {
        ordersModalEl.addEventListener('shown.bs.modal', renderOrderHistory);
    }
});
//Register account


// ==========================================
// 🔐 ១. មុខងារប្ដូរផ្ទាំងចុះឡើងរវាង Login និង Register
// ==========================================
function toggleAuth(type) {
    const loginSec = document.getElementById('loginSection');
    const registerSec = document.getElementById('registerSection');

    if (!loginSec || !registerSec) return;

    if (type === 'register') {
        loginSec.style.display = 'none';
        registerSec.style.display = 'block';
    } else {
        loginSec.style.display = 'block';
        registerSec.style.display = 'none';
    }
}

// មុខងារបើក Modal ពេលចុចពី Menu Navbar
function simulateLogin() {
    toggleAuth('login'); // ឱ្យវាបង្ហាញផ្ទាំង Login មុនគេជានិច្ច

    const authModalEl = document.getElementById('authModal');
    if (authModalEl) {
        const authModal = new bootstrap.Modal(authModalEl);
        authModal.show();
    }
}


document.addEventListener("DOMContentLoaded", function () {

    // ==========================================
    // 📤 ១. មុខងារចុះឈ្មោះគណនីថ្មី (Register)
    // ==========================================
    const registerForm = document.getElementById('registerForm');

    if (registerForm) {
        registerForm.addEventListener('submit', function (e) {
            e.preventDefault(); // ទប់ស្កាត់កុំឱ្យ Refresh ទំព័រ

            // ទាញយកតម្លៃពី Input នីមួយៗ
            const lastName = document.getElementById('regLastName').value.trim();
            const firstName = document.getElementById('regFirstName').value.trim();
            const email = document.getElementById('regEmail').value.trim();
            const password = document.getElementById('regPassword').value.trim();

            if (password.length < 8) {
                alert("⚠️ សូមបញ្ចូលពាក្យសម្ងាត់យ៉ាងតិច ៨ ខ្ទង់!");
                return;
            }

            // ទាញយក Users ដែលមានស្រាប់ពី LocalStorage
            const users = JSON.parse(localStorage.getItem('registeredUsers')) || [];

            // ពិនិត្យមើល Email ស្ទួន
            const userExists = users.find(u => u.email === email);
            if (userExists) {
                alert("⚠️ អុីមែលនេះត្រូវបានចុះឈ្មោះរួចហើយ! សូមប្រើអុីមែលផ្សេង។");
                return;
            }

            // បង្កើត Object User ថ្មី
            const newUser = {
                id: Date.now(),
                firstName: firstName,
                lastName: lastName,
                email: email,
                password: password, // ចំណាំ៖ គម្រោងពិតប្រាកដគួរប្រើ Encryption/Hashing
                dateJoined: new Date().toLocaleDateString('km-KH')
            };

            users.push(newUser);
            localStorage.setItem('registeredUsers', JSON.stringify(users));

            alert(`🎉 ចុះឈ្មោះជោគជ័យ! សូមស្វាគមន៍បង ${lastName} ${firstName}។`);

            registerForm.reset(); // សម្អាត Form
            toggleAuth('login');  // ប្ដូរទៅផ្ទាំង Login វិញដើម្បីឱ្យ User ចូលគណនី
        });
    }

    // ==========================================
    // 📥 ២. មុខងារចូលគណនី (Login)
    // ==========================================
    const loginForm = document.getElementById('loginForm');

    if (loginForm) {
        loginForm.addEventListener('submit', function (e) {
            e.preventDefault();

            const email = document.getElementById('loginEmail').value.trim();
            const password = document.getElementById('loginPassword').value.trim();

            const users = JSON.parse(localStorage.getItem('registeredUsers')) || [];

            // ស្វែងរក User ដែលត្រូវគ្នានឹង Email និង Password
            const validUser = users.find(u => u.email === email && u.password === password);

            if (validUser) {
                // រក្សាទុក Session ថាបាន Login រួចរាល់
                localStorage.setItem('currentUser', JSON.stringify(validUser));

                alert(`👋 ស្វាគមន៍ត្រឡប់មកវិញ បង ${validUser.lastName} ${validUser.firstName}!`);

                // បិទ Modal
                const authModalEl = document.getElementById('authModal');
                const modalInstance = bootstrap.Modal.getInstance(authModalEl);
                if (modalInstance) modalInstance.hide();

                // Refresh ទំព័រដើម្បីធ្វើបច្ចុប្បន្នភាព UI
                window.location.reload();
            } else {
                alert("❌ អុីមែល ឬពាក្យសម្ងាត់មិនត្រឹមត្រូវទេ!");
            }
        });
    }
});

//profile
document.addEventListener("DOMContentLoaded", function () {
    const profileModalEl = document.getElementById('profileModal');

    if (profileModalEl) {
        // 🔔 ចាប់យកព្រឹត្តិការណ៍ (Event) ពេល Modal បើកឡើង
        profileModalEl.addEventListener('shown.bs.modal', function () {
            // ទាញទិន្នន័យ User ដែលបាន Login ជាប់ចេញពី LocalStorage
            const currentUser = JSON.parse(localStorage.getItem('currentUser'));

            if (currentUser) {
                // ១. បំពេញឈ្មោះធំខាងលើ
                document.getElementById('profFullName').innerText = `${currentUser.lastName} ${currentUser.firstName}`;

                // ២. បំពេញតម្លៃចូល Inputs
                document.getElementById('profLastName').value = currentUser.lastName || "";
                document.getElementById('profFirstName').value = currentUser.firstName || "";
                document.getElementById('profEmail').value = currentUser.email || "";

                // លេខទូរស័ព្ទ (បើអត់ទាន់មាន ទុកទទេ)
                document.getElementById('profPhone').value = currentUser.phone || "";
            } else {
                alert("⚠️ សូមចូលគណនីជាមុនសិន!");
            }
        });
    }

    // 💾 មុខងារចុច Save ការកែប្រែ
    const profileForm = document.getElementById('profileForm');
    if (profileForm) {
        profileForm.addEventListener('submit', function (e) {
            e.preventDefault();

            const currentUser = JSON.parse(localStorage.getItem('currentUser'));
            if (!currentUser) return;

            // ចាប់យកតម្លៃថ្មីដែល User បានកែ
            currentUser.lastName = document.getElementById('profLastName').value.trim();
            currentUser.firstName = document.getElementById('profFirstName').value.trim();
            currentUser.email = document.getElementById('profEmail').value.trim();
            currentUser.phone = document.getElementById('profPhone').value.trim();

            // រក្សាទុកចូល LocalStorage វិញ
            localStorage.setItem('currentUser', JSON.stringify(currentUser));

            // បច្ចុប្បន្នភាពឈ្មោះធំខាងលើភ្លាមៗ
            document.getElementById('profFullName').innerText = `${currentUser.lastName} ${currentUser.firstName}`;

            alert("🎉 ការកែប្រែត្រូវបានរក្សាទុកដោយជោគជ័យ!");
        });
    }
});

//search product
// 🔍 ៣. មុខងារស្វែងរកទំនិញ (Live Search Function)
function liveSearch() {
    const input = document.getElementById('searchInput').value.trim().toLowerCase();

    const filtered = products.filter(p =>
        p.name.toLowerCase().includes(input) ||
        p.category.toLowerCase().includes(input)
    );

    renderProduct(filtered); // 👈 បោះ Array ថ្មីទៅឱ្យ Render គូសឡើងវិញ
}



//Brand
// ១. មុខងារស្វែងរក និង Render ម៉ាកផលិតផលដែលមានស្រាប់នៅក្នុង Array អូតូ
function renderBrands() {
    const brandContainer = document.getElementById('brand-container');
    if (!brandContainer) return;
    // ទាញយកតែឈ្មោះ Brand ដែលមិនស្ទួនគ្នា (Unique Brands) ចេញពី Array ផលិតផលទាំង ២០
    const uniqueBrands = [...new Set(products.map(product => product.brand))];
    // បង្កើត Object ដើម្បីដាក់ Icon និង ពណ៌ទៅតាមឈ្មោះម៉ាកនីមួយៗ
    const brandIcons = {
        // --- 💻 Laptop & PC Brands ---
        "Dell": { icon: "bi-laptop", color: "text-primary" },
        "Asus": { icon: "bi-cpu", color: "text-danger" },
        "Apple": { icon: "bi-apple", color: "text-dark" },
        "MSI": { icon: "bi-gpu-card", color: "text-warning" },
        "HP": { icon: "bi-pc-display", color: "text-dark" },
        "Lenovo": { icon: "bi-motherboard", color: "text-secondary" },
        "Gigabyte": { icon: "bi-circuit-board", color: "text-primary" },

        // --- 🎮 Gaming & Accessories ---
        "Razer": { icon: "bi-controller", color: "text-success" },
        "Logitech": { icon: "bi-mouse3", color: "text-info" },
        "HyperX": { icon: "bi-headset", color: "text-danger" },

        // --- 🌬️ Cooling & PC Cases ---
        "Corsair": { icon: "bi-fan", color: "text-info" },
        "Lian Li": { icon: "bi-box-seam", color: "text-secondary" },

        // --- 💾 Storage & RAM (អង្គចងចាំ) ---
        "Samsung": { icon: "bi-phone", color: "text-primary" }, // ឬ bi-gpu-card
        "Kingston": { icon: "bi-memory", color: "text-danger" },
        "Crucial": { icon: "bi-sd-card", color: "text-primary" },
        "WD": { icon: "bi-hdd-rack", color: "text-success" } // Western Digital
    };

    brandContainer.innerHTML = ""; // សម្អាតទិន្នន័យចាស់

    // 🔄 រត់ Loop ដើម្បីគូរ Brand នីមួយៗចេញមកក្រៅ
    uniqueBrands.forEach((brandName, index) => {
        const delay = (index + 1) * 100; // Animation delay

        // បើម៉ាកនោះអត់ទាន់មាន Icon ក្នុង Object ខាងលើ ឱ្យ Icon Default (bi-tag)
        const brandInfo = brandIcons[brandName] || { icon: "bi-tag", color: "text-primary" };

        brandContainer.innerHTML += `
            <div class="col-4 col-md-3 col-lg-2" style="width: 150px;" data-aos="zoom-in" data-aos-delay="${delay}">
                <div class="brand-item p-3 text-center rounded-4 border bg-white shadow-sm h-100" 
                     onclick="filterByBrand('${brandName}')" style="cursor: pointer; transition: all 0.3s;">
                    <i class="bi ${brandInfo.icon} fs-1 ${brandInfo.color} mb-2 d-block"></i>
                    <h6 class="fw-bold mb-0 text-dark small">${brandName.toUpperCase()}</h6>
                </div>
            </div>
        `;
    });
}

// ២. មុខងារ Filter ពេលចុចលើ Brand នីមួយៗ
function filterByBrand(brandName) {
    const filtered = products.filter(p => p.brand.toLowerCase() === brandName.toLowerCase());
    // ហៅ Function render Product របស់បងមកគូរឡើងវិញ
    renderProduct(filtered);
    // Scroll ទៅកាន់ផ្នែក Product List
    document.getElementById('products').scrollIntoView({ behavior: 'smooth' });
}

// 🚀 ដំណើរការ Render ទាំង Product និង Brand ពេលបើក Web ភ្លាម
document.addEventListener("DOMContentLoaded", function () {
    renderProducts(products); // គូរទំនិញទាំង ២០
    renderBrands();           // គូរ Brand តាមរយៈ Loop
});



document.addEventListener('DOMContentLoaded', function () {
    const chatToggleBtn = document.getElementById('chatToggleBtn');
    const chatBox = document.getElementById('chatBox');
    const chatCloseBtn = document.getElementById('chatCloseBtn');
    const chatForm = document.getElementById('chatForm');
    const chatInput = document.getElementById('chatInput');
    const chatBody = document.getElementById('chatBody');

    const BOT_TOKEN = '8884657050:AAGq7RcLhCnCjcFKcdGWG1_hXET3eRrK_vo';
    const CHAT_ID = '1094421804';

    let lastUpdateId = 0;
    let isInitialized = false;
    let isFetching = false;
    let userName = "";

    const savedUserName = localStorage.getItem('savann_user_name');
    if (savedUserName) {
        userName = savedUserName;
        document.getElementById('displayUserName').innerText = userName;
        document.getElementById('namePromptContainer').style.display = 'none';
        document.getElementById('welcomeMessageContainer').classList.remove('d-none');
        document.getElementById('chatFooter').classList.remove('d-none');
    }

    chatToggleBtn.addEventListener('click', function () {
        chatBox.classList.toggle('d-none');
    });

    chatCloseBtn.addEventListener('click', function () {
        chatBox.classList.add('d-none');
    });

    document.getElementById('nameForm').addEventListener('submit', function (e) {
        e.preventDefault();
        const inputVal = document.getElementById('userNameInput').value.trim();

        if (inputVal !== "") {
            userName = inputVal;
            localStorage.setItem('savann_user_name', userName);

            document.getElementById('displayUserName').innerText = userName;
            document.getElementById('namePromptContainer').style.display = 'none';
            document.getElementById('welcomeMessageContainer').classList.remove('d-none');
            document.getElementById('chatFooter').classList.remove('d-none');
        }
    });

    chatForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const userText = chatInput.value.trim();
        if (!userText) return;

        appendMessage(userText, 'user');
        chatInput.value = '';

        const messageText = `👤 [${userName}]: ${userText}`;
        const url = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`;

        fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                chat_id: CHAT_ID,
                text: messageText
            })
        }).catch(error => console.error('Send Error:', error));
    });

    // ទាញយកសារឆ្លើយតបពី Admin ដោយមានប្រព័ន្ធការពារ Conflict
    // ទាញយកសារឆ្លើយតបពី Admin (តាមរយៈការ Reply ចំសារ User នោះ)
    async function fetchTelegramUpdates() {
        if (isFetching || !userName) return;
        isFetching = true;

        const url = `https://api.telegram.org/bot${BOT_TOKEN}/getUpdates?offset=${lastUpdateId + 1}&timeout=3`;

        try {
            const response = await fetch(url);
            const data = await response.json();

            if (data.ok && data.result.length > 0) {
                data.result.forEach(update => {
                    lastUpdateId = update.update_id;

                    if (!isInitialized) {
                        return;
                    }

                    if (update.message && update.message.chat.id.toString() === CHAT_ID.toString()) {
                        if (update.message.from.is_bot) return;

                        const messageText = update.message.text;
                        if (messageText) {
                            // ពិនិត្យមើលថាតើ Admin បាន Reply ចំសារដែលមានឈ្មោះ User នេះដែរឬទេ
                            if (update.message.reply_to_message) {
                                const repliedText = update.message.reply_to_message.text;
                                // ប្រសិនបើសារដើមដែលត្រូវបាន Reply នោះមានឈ្មោះ User នេះ វានឹងទម្លាក់សារចូល Chat ភ្លាម
                                if (repliedText && repliedText.includes(userName)) {
                                    appendMessage(messageText, 'bot');
                                }
                            }
                        }
                    }
                });
                isInitialized = true;
            } else if (!isInitialized) {
                isInitialized = true;
            }
        } catch (error) {
            console.warn('Polling waiting or conflict handled.');
        } finally {
            isFetching = false;
        }
    }

    // ឆែកមើលសារឆ្លើយតបរៀងរាល់ ៤ វិនាទីម្ដង
    setInterval(fetchTelegramUpdates, 4000);
    // រចនាប័ទ្មបង្ហាញសារទាំងសងខាងស្អាត
    function appendMessage(text, sender) {
        const cleanText = text.replace(/👤\s*\[.*?\]:\s*/, '').trim();
        const messageDiv = document.createElement('div');
        messageDiv.classList.add('d-flex', 'mb-3', 'w-100');

        if (sender === 'user') {
            messageDiv.classList.add('justify-content-end');
            messageDiv.innerHTML = `
                <div class="text-white px-3 py-2 shadow-sm position-relative" style="max-width: 75%; background: linear-gradient(135deg, #0d6efd, #0b5ed7); word-break: break-word; font-size: 0.9rem; border-radius: 18px 18px 4px 18px;">
                    ${cleanText}
                </div>
            `;
        } else {
            messageDiv.classList.add('justify-content-start');
            messageDiv.innerHTML = `
                <div class="bg-white text-dark px-3 py-2 shadow-sm border position-relative" style="max-width: 75%; word-break: break-word; font-size: 0.9rem; border-radius: 18px 18px 18px 4px;">
                    <div class="fw-bold text-primary mb-1" style="font-size: 0.75rem;"><i class="bi bi-robot me-1"></i> Savann Support</div>
                    ${cleanText}
                </div>
            `;
        }

        chatBody.appendChild(messageDiv);
        chatBody.scrollTop = chatBody.scrollHeight;
    }

    

    
});
