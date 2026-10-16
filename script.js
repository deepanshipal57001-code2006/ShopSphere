 "use strict";

// ==================================================
// 1. PRODUCT CATALOG — 24 SAMPLE PRODUCTS
// ==================================================

const products = [
  {
    id: 1, name: "Wireless Headphones", category: "Electronics",
    price: 1499, rating: 4.8, badge: "Bestseller",
    description: "Enjoy your favourite music with a comfortable design and an everyday listening experience.",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=700&q=80"
  },
  {
    id: 2, name: "Smart Watch", category: "Electronics",
    price: 2299, rating: 4.6, badge: "Popular",
    description: "A versatile watch-inspired accessory for everyday style and convenience.",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=700&q=80"
  },
  {
    id: 3, name: "Bluetooth Speaker", category: "Electronics",
    price: 1199, rating: 4.7, badge: "Trending",
    description: "A compact speaker concept for music at home or on the go.",
    image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?auto=format&fit=crop&w=700&q=80"
  },
  {
    id: 4, name: "Wireless Keyboard", category: "Electronics",
    price: 1799, rating: 4.5, badge: "",
    description: "A clean keyboard design for study sessions and everyday desk setups.",
    image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=700&q=80"
  },
  {
    id: 5, name: "Classic Sneakers", category: "Fashion",
    price: 1899, rating: 4.7, badge: "Trending",
    description: "Versatile casual sneakers that complement a relaxed everyday look.",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=700&q=80"
  },
  {
    id: 6, name: "Casual T-Shirt", category: "Fashion",
    price: 599, rating: 4.4, badge: "Value Pick",
    description: "A simple wardrobe essential for casual outfits and daily wear.",
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=700&q=80"
  },
  {
    id: 7, name: "Denim Jacket", category: "Fashion",
    price: 2199, rating: 4.6, badge: "",
    description: "A classic outerwear style that layers easily over everyday outfits.",
    image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=700&q=80"
  },
  {
    id: 8, name: "Everyday Hoodie", category: "Fashion",
    price: 1299, rating: 4.5, badge: "",
    description: "A relaxed hoodie concept for comfortable casual styling.",
    image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&w=700&q=80"
  },
  {
    id: 9, name: "Classic Sunglasses", category: "Accessories",
    price: 799, rating: 4.3, badge: "",
    description: "A timeless accessory to complete your everyday look.",
    image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=700&q=80"
  },
  {
    id: 10, name: "Travel Backpack", category: "Accessories",
    price: 1299, rating: 4.6, badge: "Popular",
    description: "A versatile bag style for carrying daily essentials and travel items.",
    image: "https://images.unsplash.com/photo-1622560480654-d96214fdc887?auto=format&fit=crop&w=700&q=80"
  },
  {
    id: 11, name: "Classic Wristwatch", category: "Accessories",
    price: 1599, rating: 4.5, badge: "",
    description: "A polished watch style that works for casual and smart outfits.",
    image: "https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=700&q=80"
  },
  {
    id: 12, name: "Minimal Wallet", category: "Accessories",
    price: 499, rating: 4.2, badge: "",
    description: "A compact wallet concept for organising your everyday essentials.",
    image: "https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format&fit=crop&w=700&q=80"
  },
  {
    id: 13, name: "Ceramic Coffee Mug", category: "Home",
    price: 349, rating: 4.2, badge: "New",
    description: "A minimal mug design for your morning coffee or evening tea.",
    image: "https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?auto=format&fit=crop&w=700&q=80"
  },
  {
    id: 14, name: "Modern Desk Lamp", category: "Home",
    price: 899, rating: 4.5, badge: "",
    description: "A contemporary lighting accessory for a tidy desk or reading corner.",
    image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=700&q=80"
  },
  {
    id: 15, name: "Decorative Cushion", category: "Home",
    price: 649, rating: 4.4, badge: "",
    description: "A decorative accent designed to add character to a living space.",
    image: "https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?auto=format&fit=crop&w=700&q=80"
  },
  {
    id: 16, name: "Indoor Plant Pot", category: "Home",
    price: 399, rating: 4.6, badge: "Eco Style",
    description: "A simple planter concept for desks, shelves and indoor greenery.",
    image: "https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&w=700&q=80"
  },
  {
    id: 17, name: "Daily Face Care", category: "Beauty",
    price: 549, rating: 4.3, badge: "",
    description: "A sample skincare product listing for a beauty and personal-care collection.",
    image: "https://images.unsplash.com/photo-1556229010-6c3f2c9ca5f8?auto=format&fit=crop&w=700&q=80"
  },
  {
    id: 18, name: "Beauty Essentials", category: "Beauty",
    price: 799, rating: 4.4, badge: "Popular",
    description: "A beauty collection concept for your daily self-care routine.",
    image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=700&q=80"
  },
  {
    id: 19, name: "Perfume Collection", category: "Beauty",
    price: 999, rating: 4.5, badge: "",
    description: "A fragrance-inspired product listing for a polished everyday collection.",
    image: "https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&w=700&q=80"
  },
  {
    id: 20, name: "Makeup Organizer", category: "Beauty",
    price: 459, rating: 4.2, badge: "",
    description: "A storage accessory concept for keeping personal-care essentials organised.",
    image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=700&q=80"
  },
  {
    id: 21, name: "Running Shoes", category: "Fashion",
    price: 2499, rating: 4.8, badge: "Top Rated",
    description: "Sport-inspired footwear for an active, casual everyday style.",
    image: "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?auto=format&fit=crop&w=700&q=80"
  },
  {
    id: 22, name: "Laptop Sleeve", category: "Accessories",
    price: 699, rating: 4.4, badge: "",
    description: "A practical sleeve concept for carrying a laptop in your daily bag.",
    image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=700&q=80"
  },
  {
    id: 23, name: "Table Clock", category: "Home",
    price: 599, rating: 4.1, badge: "",
    description: "A decorative clock concept for a bedside table, shelf or desk.",
    image: "https://images.unsplash.com/photo-1508057198894-247b23fe5ade?auto=format&fit=crop&w=700&q=80"
  },
  {
    id: 24, name: "Portable Headphones", category: "Electronics",
    price: 1999, rating: 4.6, badge: "Editor's Pick",
    description: "A modern headphone listing designed for a personal audio setup.",
    image: "https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=700&q=80"
  }
];

// ==================================================
// 2. DOM ELEMENTS
// ==================================================

const $ = id => document.getElementById(id);

const productGrid = $("productGrid");
const searchInput = $("searchInput");
const clearSearch = $("clearSearch");
const categoryFilters = $("categoryFilters");
const sortSelect = $("sortSelect");
const maxPrice = $("maxPrice");
const maxPriceLabel = $("maxPriceLabel");
const resultsCount = $("resultsCount");
const emptyMessage = $("emptyMessage");

const cartButton = $("cartButton");
const cartCount = $("cartCount");
const cartDrawer = $("cartDrawer");
const cartOverlay = $("cartOverlay");
const closeCartButton = $("closeCart");
const cartItems = $("cartItems");
const cartSubtotal = $("cartSubtotal");
const cartHeadingCount = $("cartHeadingCount");
const checkoutButton = $("checkoutButton");

const wishlistButton = $("wishlistButton");
const wishlistCount = $("wishlistCount");
const wishlistDrawer = $("wishlistDrawer");
const wishlistOverlay = $("wishlistOverlay");
const closeWishlistButton = $("closeWishlist");
const wishlistItems = $("wishlistItems");
const wishlistHeadingCount = $("wishlistHeadingCount");

const productModal = $("productModal");
const productModalContent = $("productModalContent");
const closeProductModal = $("closeProductModal");

const checkoutModal = $("checkoutModal");
const closeCheckoutButton = $("closeCheckout");
const continueShoppingButton = $("continueShopping");

const toast = $("toast");

// ==================================================
// 3. STORAGE AND APP STATE
// ==================================================

const KEYS = {
  cart: "shopsphere-cart-v2",
  wishlist: "shopsphere-wishlist-v2"
};

function readStorage(key, fallback) {
  try {
    const value = JSON.parse(localStorage.getItem(key));
    return value ?? fallback;
  } catch {
    return fallback;
  }
}

function saveStorage(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch {
    notify("Browser storage is unavailable.");
  }
}

function loadCart() {
  const saved = readStorage(KEYS.cart, []);
  if (!Array.isArray(saved)) return [];

  return saved
    .filter(item =>
      item &&
      products.some(product => product.id === item.id) &&
      Number.isInteger(item.quantity) &&
      item.quantity >= 1 &&
      item.quantity <= 99
    )
    .map(item => ({ id: item.id, quantity: item.quantity }));
}

function loadWishlist() {
  const saved = readStorage(KEYS.wishlist, []);
  if (!Array.isArray(saved)) return [];

  return [...new Set(saved.filter(id =>
    Number.isInteger(id) && products.some(p => p.id === id)
  ))];
}

let cart = loadCart();
let wishlist = loadWishlist();
let activeCategory = "All";
let searchTerm = "";
let selectedProductId = null;
let toastTimer;

const money = value => new Intl.NumberFormat("en-IN", {
  style: "currency",
  currency: "INR",
  maximumFractionDigits: 0
}).format(value);

function getProduct(id) {
  return products.find(product => product.id === id);
}

function escapeHTML(value) {
  return String(value).replace(/[&<>"']/g, char => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
  })[char]);
}

function notify(message) {
  clearTimeout(toastTimer);
  toast.textContent = message;
  toast.classList.add("show");

  toastTimer = setTimeout(() => {
    toast.classList.remove("show");
  }, 2400);
}

// ==================================================
// 4. SEARCH, CATEGORY, PRICE AND SORT FILTERS
// ==================================================

function getFilteredProducts() {
  const limit = Number(maxPrice.value);

  let list = products.filter(product => {
    const matchesCategory =
      activeCategory === "All" ||
      product.category === activeCategory;

    const matchesPrice = product.price <= limit;

    const searchable = (
      product.name + " " +
      product.category + " " +
      product.description
    ).toLowerCase();

    const matchesSearch = searchable.includes(searchTerm.toLowerCase());

    return matchesCategory && matchesPrice && matchesSearch;
  });

  switch (sortSelect.value) {
    case "price-asc":
      list.sort((a, b) => a.price - b.price);
      break;
    case "price-desc":
      list.sort((a, b) => b.price - a.price);
      break;
    case "rating":
      list.sort((a, b) => b.rating - a.rating);
      break;
    case "name":
      list.sort((a, b) => a.name.localeCompare(b.name));
      break;
    default:
      list.sort((a, b) => a.id - b.id);
  }

  return list;
}

// ==================================================
// 5. PRODUCT CARDS
// ==================================================

function productCard(product) {
  const saved = wishlist.includes(product.id);

  return `
    <article class="product-card">
      <div class="product-image-wrap">
        <img
          class="product-image"
          src="${product.image}"
          alt="${escapeHTML(product.name)}"
          loading="lazy"
        >
        ${product.badge
          ? `<span class="product-badge">${escapeHTML(product.badge)}</span>`
          : ""}
        <button
          class="heart-button ${saved ? "saved" : ""}"
          data-action="wishlist"
          data-id="${product.id}"
          aria-label="${saved ? "Remove from" : "Add to"} wishlist"
          aria-pressed="${saved}"
        >${saved ? "♥" : "♡"}</button>
      </div>

      <div class="product-info">
        <p class="product-category">${escapeHTML(product.category)}</p>
        <h3 class="product-name">${escapeHTML(product.name)}</h3>
        <p class="product-description">${escapeHTML(product.description)}</p>
        <p class="product-rating">★ ${product.rating.toFixed(1)} <span>/ 5</span></p>

        <div class="product-bottom">
          <span class="product-price">${money(product.price)}</span>
          <button class="add-button" data-action="add" data-id="${product.id}">
            + Add
          </button>
        </div>

        <button class="details-button" data-action="details" data-id="${product.id}">
          View product details →
        </button>
      </div>
    </article>
  `;
}

function renderProducts() {
  const list = getFilteredProducts();

  productGrid.innerHTML = list.map(productCard).join("");
  emptyMessage.hidden = list.length > 0;
  resultsCount.textContent =
    `${list.length} product${list.length === 1 ? "" : "s"} found`;

  maxPriceLabel.textContent = money(Number(maxPrice.value));
  clearSearch.hidden = searchTerm.length === 0;
}

searchInput.addEventListener("input", () => {
  searchTerm = searchInput.value.trim();
  renderProducts();
});

clearSearch.addEventListener("click", () => {
  searchInput.value = "";
  searchTerm = "";
  renderProducts();
  searchInput.focus();
});

categoryFilters.addEventListener("click", event => {
  const button = event.target.closest("[data-category]");
  if (!button) return;

  activeCategory = button.dataset.category;

  categoryFilters.querySelectorAll("[data-category]").forEach(item => {
    item.classList.toggle("active", item === button);
  });

  renderProducts();
});

sortSelect.addEventListener("change", renderProducts);
maxPrice.addEventListener("input", renderProducts);

function resetFilters() {
  activeCategory = "All";
  searchTerm = "";
  searchInput.value = "";
  sortSelect.value = "featured";
  maxPrice.value = maxPrice.max;

  categoryFilters.querySelectorAll("[data-category]").forEach(button => {
    button.classList.toggle("active", button.dataset.category === "All");
  });

  renderProducts();
}

$("resetFilters").addEventListener("click", resetFilters);
$("emptyReset").addEventListener("click", resetFilters);

// ==================================================
// 6. WISHLIST
// ==================================================

function saveWishlist() {
  saveStorage(KEYS.wishlist, wishlist);
}

function toggleWishlist(id) {
  const product = getProduct(id);
  if (!product) return;

  if (wishlist.includes(id)) {
    wishlist = wishlist.filter(itemId => itemId !== id);
    notify("Removed from your wishlist.");
  } else {
    wishlist.push(id);
    notify("Added to your wishlist!");
  }

  saveWishlist();
  renderProducts();
  renderWishlist();
  updateHeaderCounts();
}

function renderWishlist() {
  wishlistHeadingCount.textContent = `(${wishlist.length})`;

  if (wishlist.length === 0) {
    wishlistItems.innerHTML = `
      <div class="drawer-empty">
        <span>♡</span>
        <h3>Your wishlist is empty</h3>
        <p>Save products you want to revisit.</p>
        <button class="primary-button" data-action="shop">Explore products →</button>
      </div>
    `;
    return;
  }

  wishlistItems.innerHTML = wishlist.map(id => {
    const product = getProduct(id);
    if (!product) return "";

    return `
      <div class="drawer-item">
        <img src="${product.image}" alt="${escapeHTML(product.name)}">
        <div>
          <h4>${escapeHTML(product.name)}</h4>
          <p class="item-price">${money(product.price)}</p>
          <button class="remove-button" data-action="wishlist-remove" data-id="${id}">
            Remove from wishlist
          </button>
          <button class="remove-button" data-action="wishlist-add-cart" data-id="${id}">
            + Add to cart
          </button>
        </div>
        <button class="close-button" data-action="wishlist-remove" data-id="${id}" aria-label="Remove item">×</button>
      </div>
    `;
  }).join("");
}

wishlistItems.addEventListener("click", event => {
  const button = event.target.closest("[data-action]");
  if (!button) return;

  const action = button.dataset.action;

  if (action === "shop") {
    closeDrawer("wishlist");
    $("products").scrollIntoView({ behavior: "smooth" });
    return;
  }

  const id = Number(button.dataset.id);

  if (action === "wishlist-remove") {
    wishlist = wishlist.filter(itemId => itemId !== id);
    saveWishlist();
    renderWishlist();
    renderProducts();
    updateHeaderCounts();
    notify("Removed from wishlist.");
  }

  if (action === "wishlist-add-cart") {
    addToCart(id);
  }
});

function updateHeaderCounts() {
  const count = cart.reduce((sum, item) => sum + item.quantity, 0);
  cartCount.textContent = count;
  wishlistCount.textContent = wishlist.length;
  cartHeadingCount.textContent = `(${count})`;
  wishlistHeadingCount.textContent = `(${wishlist.length})`;
}

// ==================================================
// 7. SHOPPING CART
// ==================================================

function saveCart() {
  saveStorage(KEYS.cart, cart);
}

function addToCart(id) {
  const product = getProduct(id);
  if (!product) return;

  const existing = cart.find(item => item.id === id);

  if (existing) {
    if (existing.quantity >= 99) {
      notify("Maximum quantity reached.");
      return;
    }
    existing.quantity += 1;
  } else {
    cart.push({ id, quantity: 1 });
  }

  updateCart();
  notify(`${product.name} added to cart.`);
}

function cartTotal() {
  return cart.reduce((total, item) => {
    const product = getProduct(item.id);
    return total + (product ? product.price * item.quantity : 0);
  }, 0);
}


function renderCart() {
  if (cart.length === 0) {
    cartItems.innerHTML = `
      <div class="drawer-empty">
        <span>🛍</span>
        <h3>Your cart is empty</h3>
        <p>Discover products and add your favourites.</p>
        <button class="primary-button" data-action="shop">
          Explore products →
        </button>
      </div>
    `;
  } else {
    cartItems.innerHTML = cart.map(item => {
      const product = getProduct(item.id);
      if (!product) return "";

      return `
        <div class="drawer-item">
          <img src="${product.image}" alt="${escapeHTML(product.name)}">
          <div>
            <h4>${escapeHTML(product.name)}</h4>
            <p class="item-price">${money(product.price * item.quantity)}</p>

            <div class="quantity-control">
              <button data-action="decrease" data-id="${product.id}">−</button>
              <span>${item.quantity}</span>
              <button data-action="increase" data-id="${product.id}">+</button>
            </div>

            <button class="remove-button"
              data-action="remove"
              data-id="${product.id}">
              Remove item
            </button>
          </div>
        </div>
      `;
    }).join("");
  }

  cartSubtotal.textContent = money(cartTotal());
  checkoutButton.disabled = cart.length === 0;
  updateHeaderCounts();
}

function updateCart() {
  saveCart();
  renderCart();
  updateHeaderCounts();
}

function openDrawer(type) {
  const drawer = type === "cart" ? cartDrawer : wishlistDrawer;
  const overlay = type === "cart" ? cartOverlay : wishlistOverlay;

  if (!drawer || !overlay) return;

  drawer.classList.add("open", "active");
  overlay.classList.add("show", "active");
  drawer.setAttribute("aria-hidden", "false");
  document.body.classList.add("drawer-open");
}

function closeDrawer(type) {
  const drawer = type === "cart" ? cartDrawer : wishlistDrawer;
  const overlay = type === "cart" ? cartOverlay : wishlistOverlay;

  if (!drawer || !overlay) return;

  drawer.classList.remove("open", "active");
  overlay.classList.remove("show", "active");
  drawer.setAttribute("aria-hidden", "true");

  const anotherDrawerOpen =
    cartDrawer?.classList.contains("open") ||
    wishlistDrawer?.classList.contains("open");

  if (!anotherDrawerOpen) {
    document.body.classList.remove("drawer-open");
  }
}

// Cart buttons: increase, decrease, remove
cartItems.addEventListener("click", event => {
  const button = event.target.closest("[data-action]");
  if (!button) return;

  const action = button.dataset.action;

  if (action === "shop") {
    closeDrawer("cart");
    $("products")?.scrollIntoView({ behavior: "smooth" });
    return;
  }

  const id = Number(button.dataset.id);
  const item = cart.find(entry => entry.id === id);

  if (!item) return;

  if (action === "increase") {
    if (item.quantity >= 99) {
      notify("Maximum quantity reached.");
      return;
    }
    item.quantity++;
  } else if (action === "decrease") {
    item.quantity--;

    if (item.quantity < 1) {
      cart = cart.filter(entry => entry.id !== id);
    }
  } else if (action === "remove") {
    cart = cart.filter(entry => entry.id !== id);
  } else {
    return;
  }

  updateCart();
});

// Product card buttons
productGrid.addEventListener("click", event => {
  const button = event.target.closest("[data-action]");
  if (!button) return;

  const id = Number(button.dataset.id);
  const action = button.dataset.action;

  if (action === "add") {
    addToCart(id);
  } else if (action === "wishlist") {
    toggleWishlist(id);
  } else if (action === "details") {
    showProductDetails(id);
  }
});

// Show product details
function showProductDetails(id) {
  const product = getProduct(id);

  if (!product || !productModal || !productModalContent) return;

  selectedProductId = id;

  productModalContent.innerHTML = `
    <div class="modal-product">
      <img src="${product.image}" alt="${escapeHTML(product.name)}">

      <div class="modal-product-info">
        <p class="product-category">${escapeHTML(product.category)}</p>
        <h2>${escapeHTML(product.name)}</h2>
        <p class="product-rating">★ ${product.rating.toFixed(1)} / 5</p>
        <p>${escapeHTML(product.description)}</p>
        <p class="product-price">${money(product.price)}</p>

        <button class="primary-button"
          data-action="modal-add"
          data-id="${product.id}">
          Add to cart
        </button>
      </div>
    </div>
  `;

  productModal.hidden = false;
  productModal.classList.add("show", "active");
  productModal.setAttribute("aria-hidden", "false");
}

productModalContent?.addEventListener("click", event => {
  const button = event.target.closest('[data-action="modal-add"]');
  if (!button) return;

  addToCart(Number(button.dataset.id));
  closeProductDetails();
});

function closeProductDetails() {
  if (!productModal) return;

  productModal.classList.remove("show", "active");
  productModal.hidden = true;
  productModal.setAttribute("aria-hidden", "true");
  selectedProductId = null;
}

// Drawer and modal controls
cartButton?.addEventListener("click", () => openDrawer("cart"));
wishlistButton?.addEventListener("click", () => openDrawer("wishlist"));

closeCartButton?.addEventListener("click", () => closeDrawer("cart"));
closeWishlistButton?.addEventListener("click", () => closeDrawer("wishlist"));

cartOverlay?.addEventListener("click", () => closeDrawer("cart"));
wishlistOverlay?.addEventListener("click", () => closeDrawer("wishlist"));

closeProductModal?.addEventListener("click", closeProductDetails);

productModal?.addEventListener("click", event => {
  if (event.target === productModal) {
    closeProductDetails();
  }
});

// Close panels using Escape
document.addEventListener("keydown", event => {
  if (event.key === "Escape") {
    closeDrawer("cart");
    closeDrawer("wishlist");
    closeProductDetails();
    closeCheckout();
  }
});

// Checkout
function openCheckout() {
  if (cart.length === 0) {
    notify("Your cart is empty.");
    return;
  }

  if (!checkoutModal) return;

  checkoutModal.hidden = false;
  checkoutModal.classList.add("show", "active");
  checkoutModal.setAttribute("aria-hidden", "false");
}

function closeCheckout() {
  if (!checkoutModal) return;

  checkoutModal.classList.remove("show", "active");
  checkoutModal.hidden = true;
  checkoutModal.setAttribute("aria-hidden", "true");
}

checkoutButton?.addEventListener("click", openCheckout);
closeCheckoutButton?.addEventListener("click", closeCheckout);

continueShoppingButton?.addEventListener("click", () => {
  closeCheckout();
  closeDrawer("cart");
  $("products")?.scrollIntoView({ behavior: "smooth" });
});

// Checkout form — demo only
const checkoutForm = $("checkoutForm");

checkoutForm?.addEventListener("submit", event => {
  event.preventDefault();

  if (cart.length === 0) {
    closeCheckout();
    notify("Your cart is empty.");
    return;
  }

  cart = [];
  updateCart();
  closeCheckout();
  closeDrawer("cart");
  checkoutForm.reset();

  notify("Demo order placed successfully!");
});

// Initial page rendering
renderProducts();
renderCart();
renderWishlist();
updateHeaderCounts();
