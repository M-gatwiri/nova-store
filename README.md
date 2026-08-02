# 🛍️ NovaStore

NovaStore is a responsive React e-commerce product store built as a frontend practice project. The application demonstrates React fundamentals such as reusable components, state management, conditional rendering, event handling, filtering, and responsive design.

## 🚀 Features

- 🔍 Search products by name
- ❤️ Like and unlike products
- 🛒 Add products to cart
- ✅ Prevent duplicate cart items
- 📦 Display "Out of Stock" products
- 🚫 Disable Add to Cart for unavailable products
- 📭 Empty state when no products match the search
- ⏳ Loading screen using `useEffect` and `setTimeout`
- 📱 Responsive layout using CSS Grid
- ♿ Accessibility improvements with labels and descriptive buttons

---

## 📂 Project Structure

```
src/
│
├── components/
│   ├── Cart.jsx
│   ├── ProductCard.jsx
│   ├── ProductList.jsx
│   ├── SearchBar.jsx
│
├── App.jsx
├── main.jsx
└── styles.css
```

---

## 🛠️ Technologies Used

- React
- JavaScript (ES6+)
- CSS Grid
- React Hooks (`useState`, `useEffect`)
- Vite

---

## 📚 Concepts Practiced

### React Components
The application is broken down into reusable components:

- App
- SearchBar
- ProductList
- ProductCard
- Cart

---

### Props

Data and functions are passed between components using props.

Examples include:

- Products
- Cart
- Search state
- Add to Cart function

---

### State Management

The application uses React's `useState` hook for:

- Search input
- Cart
- Likes
- Loading state

---

### Search Functionality

Users can search products by name.

The application filters products dynamically using:

```javascript
products.filter((product) =>
  product.name.toLowerCase().includes(searchItem.toLowerCase())
)
```

---

### Like Button

Each product has an independent like button.

Users can:

- Like ❤️
- Unlike 🤍

The like count updates accordingly.

---

### Add to Cart

Users can add products to the shopping cart.

After a product is added:

- Cart count increases
- Button changes to **Added ✓**
- Duplicate products are prevented

---

### Conditional Rendering

Products that are unavailable display:

```
❌ Out of Stock
```

The Add to Cart button is disabled automatically.

---

### Empty State

When a search returns no matching products, the application displays:

```
No products found.
```

instead of an empty product list.

---

### Loading State

When the application loads, a loading message is displayed for two seconds using:

- useEffect
- setTimeout

---

### Responsive Design

The application uses CSS Grid and media queries to provide a responsive layout.

Desktop

```
□ □ □
□ □ □
```

Tablet

```
□ □
□ □
```

Mobile

```
□
□
□
```

---

### Accessibility

Accessibility improvements include:

- Labels for form inputs
- Descriptive button text
- Disabled buttons for unavailable actions
- Alt text support for future product images

---

## ▶️ Getting Started

Clone the repository

```bash
git clone https://github.com/your-username/novastore.git
```

Navigate into the project

```bash
cd novastore
```

Install dependencies

```bash
npm install
```

Start the development server

```bash
npm run dev
```

---

## 📸 Future Improvements

Some additional features that can be implemented include:

- Product images
- Sorting by price
- Sorting by rating
- Remove items from cart
- Product quantity controls
- Shopping cart page
- Dark mode
- Persistent cart using Local Storage
- Backend integration
- Product categories
- Checkout page

---

## 🎯 Learning Outcomes

This project helped reinforce:

- React component architecture
- State management with hooks
- Event handling
- Props
- Conditional rendering
- Array methods (`map`, `filter`, `some`)
- Responsive web design
- Accessibility best practices

---

## 👩‍💻 Author

**Mercy Gatwiri**

Frontend Developer | React Enthusiast

---

## 📄 License

This project is for learning and portfolio purposes.