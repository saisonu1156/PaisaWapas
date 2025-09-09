
---

# Project Management App

![React](https://img.shields.io/badge/React-18.2-blue)
![Vite](https://img.shields.io/badge/Vite-Latest-purple)
![CSS](https://img.shields.io/badge/TailwindCSS-3.3.0-blueviolet)

---

The **Product Management Application** is a simple full-stack project built with **React (frontend)**, **Node.js + Express (backend)**, and **MongoDB (database)**.  

It demonstrates **basic CRUD operations** with products, showcasing how to connect frontend, backend, and database seamlessly.

---


## 🧩 Folder Structure

```
PRODUCT-MANAGEMENT-APP/
├── backend/ # Express.js + MongoDB API
│ ├── models/ # Mongoose schemas
│ ├── routes/ # API routes
│ ├── controllers/ # Logic
│ └── server.js # Entry point
│ └── config/ # mongdb conecction + cloudinary connection
|
├── frontend/ # React app
│ ├── src/
│ │ ├── components/
│ │ │ ├── AddProduct.jsx
│ │ │ ├── AdminLayout.jsx
│ │ │ └── AdminNavbar.jsx
| | | |__ AdminSidebar.jsx
| | | |__ ListAllProducts.jsx
| | | |__ ListAllProducts.css
| | | |__ AdminSidebar.css
| | | |__ AdminNavbar.css
| | | |__ AdminLayout.css
| | | |__ AddProduct.css
│ │ ├── App.jsx
│ │ └── main.jsx
├── package.json
├── README.md
└── .gitignore
```

---

## ✨ Features

✅ Display all products in a grid/list  
✅ Add new products via form  
✅ Delete products (with confirmation)  
✅ Sort products by price  
✅ Connected using React + Express + MongoDB  

🔹 **Optional Features (Nice to Have):**
- Edit existing product  
- Search products by name  
- Basic form validation 
---

## 📚 Pages Overview

| Page | Description |
| :-- | :-- |
| **Home** (`/`) | Displays all products in a grid/list |
| **Add Product** (`/add`) | Form to add a new product (name, price, description, category) |
| **Product Details** (`/product/:id`) | View detailed info about a single product |
| **Edit Product** (`/edit/:id`) | Update details of an existing product (optional feature) |
| **Search Products** (`/search`) | Search products by name (optional feature) |

---

## 📥 Getting Started

### 1. Clone the repo

```bash
git clone https://github.com/saisonu1156/PaisaWaapas.git
```

### 2. Install dependencies

```bash
npm install
# or
yarn install
```

### 3. Run the app locally

```bash
npm run dev
# or
yarn dev
```

Access it at [http://localhost:5173](http://localhost:5173)

---



## 🔧 Built With

- [React](https://reactjs.org/) – Frontend framework for building UI
- [Node.js](https://nodejs.org/) – JavaScript runtime for backend
- [Express.js](https://expressjs.com/) – Backend framework for building REST APIs
- [MongoDB](https://www.mongodb.com/) – NoSQL database for storing product data
- [Mongoose](https://mongoosejs.com/) – ODM for MongoDB in Node.js

---

## 📸 Screenshots


| Product List | Add Product | Delete Product |
| :----------: | :----------: | :------------: |
| ![Product List](https://github.com/user-attachments/assets/b3a294a5-3edc-4cdf-b1a7-e7a806537d1c) | ![Add Product](https://github.com/user-attachments/assets/aa144a28-8d62-4bc0-900c-8ee765582afc) | ![Delete Product](https://github.com/user-attachments/assets/671702b5-1a91-4423-a065-637a896cf6ea) |

---

> **Made with Saikumar  Hanumanthu **

---

