# 🛍️ ShopSmart eCommerce Website

ShopSmart is a modern, responsive eCommerce website built using HTML, CSS, and JavaScript. It allows users to browse products, filter by category, view product details, and manage their cart with persistent storage using `localStorage`.

Visit the live demo of the ShopSmart eCommerce website:  
👉 [shopsmartfy.netlify](https://shopsmartfy.netlify.app/)

---

## 🚀 Features

- 📦 **Product Listing** – View all products with name, price, and image
- 🔍 **Search & Filter** – Real-time search and category filtering
- 📄 **Product Details Page** – View full product information and add to cart
- 🛒 **Cart Page** – View and manage cart items, see total price
- 💡 **Theme Toggle** – Switch between light and dark modes
- 🔔 **Styled Alert** – Custom popup when adding items to the cart
- 📦 **LocalStorage Support** – Persist cart and user preferences
- 📱 **Responsive Design** – Works well on mobile, tablet, and desktop
- 📌 **Sticky Footer** – Always positioned at the bottom of the screen

---

## 🧩 How It Works

1. **Product Data** is hardcoded in `script.js` as an array of objects.
2. **Product Listing** is dynamically generated on `shop.html`.
3. **Filtering** works through input events tied to the search bar and category dropdown.
4. **Product Details** page uses URL query parameters (`?id=3`) to show selected product.
5. **Cart** persists using `localStorage`, with quantity and total price calculation.
6. **Alerts** appear when a product is added to the cart, using custom styled alert boxes.
7. **Theme Preference** is saved in `localStorage` and toggled with a button.

---

## 🎨 UI Highlights

- Clean and modern UI using CSS Flexbox/Grid
- Animated buttons and transitions
- Custom alert modal
- Dark/light theme switching
- Sticky footer for better layout on short pages

---

## 📦 Installation & Usage

1. **Clone the repository**
   ```bash
   https://github.com/willy-havertz/feb-2025-final-project-and-deployment-willy-havertz.git
   ```
