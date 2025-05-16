function saveToLS(key, v) {
  localStorage.setItem(key, JSON.stringify(v));
}
function loadFromLS(key, fallback) {
  const v = localStorage.getItem(key);
  return v ? JSON.parse(v) : fallback;
}

const products = [
  {
    id: 1,
    name: "Wireless Headphones",
    category: "electronics",
    price: 99.99,
    image:
      "https://images.pexels.com/photos/610945/pexels-photo-610945.jpeg?auto=compress&cs=tinysrgb&w=300",
    description: "High-quality wireless headphones with noise cancellation.",
  },
  {
    id: 2,
    name: "Smartwatch",
    category: "electronics",
    price: 199.99,
    image:
      "https://images.pexels.com/photos/2861929/pexels-photo-2861929.jpeg?auto=compress&cs=tinysrgb&w=300",
    description: "Stylish smartwatch with health tracking.",
  },
  {
    id: 3,
    name: "Leather Jacket",
    category: "fashion",
    price: 149.99,
    image:
      "https://images.pexels.com/photos/1193966/pexels-photo-1193966.jpeg?auto=compress&cs=tinysrgb&w=300",
    description: "Genuine leather jacket for a classic look.",
  },
  {
    id: 4,
    name: "Running Shoes",
    category: "fashion",
    price: 89.99,
    image:
      "https://images.pexels.com/photos/1027130/pexels-photo-1027130.jpeg?auto=compress&cs=tinysrgb&w=300",
    description: "Comfortable running shoes for all-day wear.",
  },
  {
    id: 5,
    name: "Gaming Laptop",
    category: "electronics",
    price: 1299.99,
    image:
    "https://images.pexels.com/photos/13791398/pexels-photo-13791398.jpeg?auto=compress&cs=tinysrgb&w=300",
    description: "High-performance gaming laptop.",
  },
  {
    id: 6,
    name: "Stylish Sunglasses",
    category: "fashion",
    price: 49.99,
    image:
      "https://images.pexels.com/photos/46710/pexels-photo-46710.jpeg?auto=compress&cs=tinysrgb&w=300",
    description: "Trendy sunglasses to protect your eyes.",
  },
  {
    id: 7,
    name: "Bluetooth Speaker",
    category: "electronics",
    price: 59.99,
    image:
      "https://images.pexels.com/photos/6322727/pexels-photo-6322727.jpeg?auto=compress&cs=tinysrgb&w=400",
    description: "Portable speaker with excellent sound.",
  },
  {
    id: 8,
    name: "Casual T-Shirt",
    category: "fashion",
    price: 19.99,
    image:
      "https://images.pexels.com/photos/991511/pexels-photo-991511.jpeg?auto=compress&cs=tinysrgb&w=300",
    description: "Comfortable t-shirt for everyday wear.",
  },
  {
    id: 9,
    name: "Smartphone",
    category: "electronics",
    price: 799.99,
    image:
      "https://images.pexels.com/photos/887751/pexels-photo-887751.jpeg?auto=compress&cs=tinysrgb&w=400",
    description: "Latest smartphone with advanced features.",
  },
  {
    id: 10,
    name: "Stylish Backpack",
    category: "fashion",
    price: 39.99,
    image:
      "https://images.pexels.com/photos/30466740/pexels-photo-30466740/free-photo-of-elegant-smartphone-beside-potted-plants-on-desk.jpeg?auto=compress&cs=tinysrgb&w=300",
    description: "Durable backpack for daily use.",
  },
  {
    id: 11,
    name: "4K TV",
    category: "electronics",
    price: 599.99,
    image:
      "https://images.pexels.com/photos/5490302/pexels-photo-5490302.jpeg?auto=compress&cs=tinysrgb&w=400",
    description: "Ultra HD 4K TV with stunning picture quality.",
  },
  {
    id: 12,
    name: "Winter Coat",
    category: "fashion",
    price: 129.99,
    image:
      "https://images.pexels.com/photos/7494681/pexels-photo-7494681.jpeg?auto=compress&cs=tinysrgb&w=300",
    description: "Warm winter coat for cold weather.",
  },
  {
    id: 13,
    name: "Gaming Console",
    category: "electronics",
    price: 399.99,
    image:
      "https://images.pexels.com/photos/2520829/pexels-photo-2520829.jpeg?auto=compress&cs=tinysrgb&w=300",
    description: "Next-gen gaming console with many games.",
  },
  {
    id: 14,
    name: "Fashionable Watch",
    category: "fashion",
    price: 79.99,
    image:
      "https://images.pexels.com/photos/2113994/pexels-photo-2113994.jpeg?auto=compress&cs=tinysrgb&w=300",
    description: "Elegant watch to complement your outfit.",
  },
  {
    id: 15,
    name: "Wireless Charger",
    category: "electronics",
    price: 29.99,
    image:
      "https://images.pexels.com/photos/5961044/pexels-photo-5961044.jpeg?auto=compress&cs=tinysrgb&w=300",
    description: "Fast wireless charger for your devices.",
  },
  {
    id: 16,
    name: "Stylish Dress",
    category: "fashion",
    price: 69.99,
    image:
      "https://images.pexels.com/photos/32065431/pexels-photo-32065431/free-photo-of-elegant-woman-in-green-gown-with-tiara-outdoors.jpeg?auto=compress&cs=tinysrgb&w=300",
    description: "Beautiful dress for special occasions.",
  },
  {
    id: 17,
    name: "Portable Hard Drive",
    category: "electronics",
    price: 89.99,
    image:
      "https://images.pexels.com/photos/30070236/pexels-photo-30070236/free-photo-of-hand-holding-orange-portable-hard-drive.jpeg?auto=compress&cs=tinysrgb&w=300",
    description: "High-capacity portable hard drive.",
  },
  {
    id: 18,
    name: "Comfortable Sneakers",
    category: "fashion",
    price: 59.99,
    image:
      "https://images.pexels.com/photos/1032110/pexels-photo-1032110.jpeg?auto=compress&cs=tinysrgb&w=300",
    description: "Stylish sneakers for casual outings.",
  },
  {
    id: 19,
    name: "Smart Home Assistant",
    category: "electronics",
    price: 129.99,
    image:
      "https://images.pexels.com/photos/6205749/pexels-photo-6205749.jpeg?auto=compress&cs=tinysrgb&w=300",
    description: "Voice-controlled smart home assistant.",
  },
  {
    id: 20,
    name: "Trendy Hat",
    category: "fashion",
    price: 24.99,
    image:
      "https://images.pexels.com/photos/4996709/pexels-photo-4996709.jpeg?auto=compress&cs=tinysrgb&w=300",
    description: "Fashionable hat for sunny days.",
  },
];

let cart = loadFromLS("cart", []);

function showAlert(msg) {
  const c = document.getElementById("alert-container");
  if (!c) return;
  const a = document.createElement("div");
  a.className = "custom-alert";
  a.textContent = msg;
  c.append(a);
  setTimeout(() => a.classList.add("show"), 10);
  setTimeout(() => {
    a.classList.remove("show");
    setTimeout(() => c.removeChild(a), 300);
  }, 3000);
}

function updateCartCount() {
  const el = document.getElementById("cart-count");
  if (!el) return;
  el.textContent = cart.reduce((s, i) => s + i.quantity, 0);
}

function addToCart(id) {
  const it = cart.find((x) => x.id === id);
  if (it) it.quantity++;
  else cart.push({ id, quantity: 1 });
  saveToLS("cart", cart);
  updateCartCount();
  const p = products.find((x) => x.id === id);
  showAlert(`${p.name} added to cart!`);
}

function removeFromCart(id) {
  cart = cart.filter((x) => x.id !== id);
  saveToLS("cart", cart);
  renderCart();
}

function clearCart() {
  cart = [];
  saveToLS("cart", cart);
  renderCart();
}
function displayProducts(list) {
  const c = document.getElementById("product-list");
  if (!c) return;
  c.innerHTML = "";
  list.forEach((p) => {
    const a = document.createElement("article");
    a.className = "product-card";
    a.innerHTML = `
      <img src="${p.image}" alt="${p.name}">
      <h3>${p.name}</h3>
      <p class="price">$${p.price.toFixed(2)}</p>
      <button class="btn" onclick="addToCart(${p.id})">Add to Cart</button>
      <a href="product.html?id=${p.id}" class="btn">View Details</a>
    `;
    c.append(a);
  });
}

function setupFilters() {
  const s = document.getElementById("search"),
    f = document.getElementById("category-filter");
  if (!s || !f) return;
  function apply() {
    const term = s.value.toLowerCase(),
      cat = f.value;
    displayProducts(
      products.filter(
        (p) =>
          p.name.toLowerCase().includes(term) &&
          (cat === "all" || p.category === cat)
      )
    );
  }
  s.addEventListener("input", apply);
  f.addEventListener("change", apply);
}

function displayProductDetails() {
  const d = document.getElementById("product-detail");
  if (!d) return;
  const id = parseInt(new URLSearchParams(location.search).get("id")) || 1;
  const p = products.find((x) => x.id === id);
  if (!p) {
    d.innerHTML = "<p>Product not found.</p>";
    return;
  }
  d.innerHTML = `
    <img src="${p.image}" alt="${p.name}">
    <h2>${p.name}</h2>
    <p class="price">$${p.price.toFixed(2)}</p>
    <p>${p.description}</p>
    <button class="btn" onclick="addToCart(${p.id})">Add to Cart</button>
  `;
}

function renderCart() {
  const ctn = document.getElementById("cart-items"),
    totalEl = document.getElementById("cart-total"),
    chk = document.getElementById("checkout-btn");
  if (!ctn) return;
  ctn.innerHTML = "";
  if (cart.length === 0) {
    ctn.innerHTML =
      "<p>Your cart is empty. <a href='shop.html'>Shop now</a>.</p>";
    totalEl.textContent = "0.00";
    if (chk) chk.disabled = true;
    return;
  }
  if (chk) chk.disabled = false;
  let tot = 0;
  cart.forEach((item) => {
    const p = products.find((x) => x.id === item.id);
    const sub = p.price * item.quantity;
    tot += sub;
    const div = document.createElement("div");
    div.className = "cart-item";
    div.innerHTML = `
      <img src="${p.image}" alt="${p.name}">
      <div class="details">
        <h3>${p.name}</h3>
        <p>$${p.price.toFixed(2)} each</p>
        <div class="qty-controls">
          <button onclick="addToCart(${p.id})">+</button>
          <span>${item.quantity}</span>
          <button onclick="(()=>{
            if(item.quantity>1) item.quantity--; else removeFromCart(${p.id});
            saveToLS("cart",cart); renderCart();
          })()">−</button>
        </div>
        <button class="remove-btn" onclick="removeFromCart(${
          p.id
        })">Remove</button>
      </div>
      <div class="subtotal">$${sub.toFixed(2)}</div>
    `;
    ctn.append(div);
  });
  totalEl.textContent = tot.toFixed(2);
  updateCartCount();
}

function displayCheckoutSummary() {
  const ctn = document.getElementById("cart-summary");
  if (!ctn) return;
  if (cart.length === 0) {
    ctn.innerHTML =
      "<p>Your cart is empty. <a href='shop.html'>Shop now</a>.</p>";
    return;
  }
  const counts = cart.reduce((a, i) => {
    a[i.id] = (a[i.id] || 0) + i.quantity;
    return a;
  }, {});
  let tot = 0;
  const ul = document.createElement("ul");
  ul.className = "summary-list";
  Object.entries(counts).forEach(([id, q]) => {
    const p = products.find((x) => x.id == id);
    const sub = p.price * q;
    tot += sub;
    const li = document.createElement("li");
    li.textContent = `${p.name} × ${q} — $${sub.toFixed(2)}`;
    ul.append(li);
  });
  const p = document.createElement("p");
  p.className = "summary-total";
  p.textContent = `Total: $${tot.toFixed(2)}`;
  ctn.append(ul, p);
}

function setupCheckoutForm() {
  const f = document.getElementById("checkout-form");
  if (!f) return;
  f.addEventListener("submit", (e) => {
    e.preventDefault();
    if (!f.name.value.trim() || !f.address.value.trim() || !f.payment.value)
      return alert("Fill all fields");
    clearCart();
    window.location.href = "thankyou.html";
  });
}

function setupNavToggle() {
  const btn = document.querySelector(".menu-toggle"),
    nav = document.querySelector(".nav-links");
  if (btn && nav)
    btn.addEventListener("click", () => nav.classList.toggle("show"));
}
document.addEventListener("DOMContentLoaded", () => {
  setupNavToggle();
  updateCartCount();
  if (document.getElementById("product-list")) {
    displayProducts(products);
    setupFilters();
  }
  if (document.getElementById("product-detail")) displayProductDetails();
  if (document.getElementById("cart-items")) renderCart();
  if (document.getElementById("cart-summary")) {
    displayCheckoutSummary();
    setupCheckoutForm();
  }
});
if (document.getElementById("alert-container")) {
    const alertContainer = document.getElementById("alert-container");
    alertContainer.addEventListener("click", (e) => {
      if (e.target.classList.contains("custom-alert")) {
        e.target.classList.remove("show");
        setTimeout(() => alertContainer.removeChild(e.target), 300);
      }
    });
}
  