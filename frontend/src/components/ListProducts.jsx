import React, { useEffect, useState } from "react";
import { FiTrash2, FiEdit2, FiSearch, FiX, FiLoader, FiArrowUp } from "react-icons/fi";
import toast, { Toaster } from "react-hot-toast";
import "./ListAllProducts.css";

const API_URL = "http://localhost:5000/api/products";

function ListAllProducts() {
  const [products, setProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(true);

  // Modals
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [editProduct, setEditProduct] = useState(null);

  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [productToDelete, setProductToDelete] = useState(null);

  // Scroll-to-top button
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Fetch products
  const fetchProducts = async () => {
    try {
      setLoading(true);
      const res = await fetch(API_URL);
      const data = await res.json();
      data.sort((a, b) => a.price - b.price);
      setProducts(data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();

    const handleScroll = () => setShowScrollTop(window.scrollY > 300);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  // Edit
  const openEditModal = (product) => {
    setEditProduct(product);
    setIsEditModalOpen(true);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditProduct({ ...editProduct, [name]: value });
  };

  const handleUpdate = async () => {
    try {
      const res = await fetch(`${API_URL}/${editProduct._id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(editProduct),
      });
      if (res.ok) {
        setIsEditModalOpen(false);
        fetchProducts();
        toast.success("Product updated successfully!");
      } else {
        toast.error("Failed to update product.");
      }
    } catch (err) {
      console.error(err);
      toast.error("Failed to update product.");
    }
  };

  // Delete
  const confirmDeleteProduct = (product) => {
    setProductToDelete(product);
    setIsDeleteModalOpen(true);
  };

  const handleDelete = async () => {
    try {
      const res = await fetch(`${API_URL}/${productToDelete._id}`, { method: "DELETE" });
      if (res.ok) {
        setIsDeleteModalOpen(false);
        setProductToDelete(null);
        fetchProducts();
        toast.success("Product deleted successfully!");
      } else {
        toast.error("Failed to delete product.");
      }
    } catch (err) {
      console.error(err);
      toast.error("Failed to delete product.");
    }
  };

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="products-container">
      {/* Toast */}
      <Toaster position="top-right" />

      {/* Header + Search */}
      <div className="header-search">
        <h2>📦 All Products</h2>
        <div className="search-bar">
          <FiSearch className="search-icon" />
          <input
            type="text"
            placeholder="Search products..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          {searchQuery && (
            <button onClick={() => setSearchQuery("")} className="clear-btn">
              <FiX />
            </button>
          )}
        </div>
      </div>

      {/* Loading / Table */}
      {loading ? (
        <div className="loading">
          <FiLoader className="spinner" />
        </div>
      ) : filteredProducts.length === 0 ? (
        <div className="no-products">No products found.</div>
      ) : (
        <div className="table-wrapper">
          <table>
            <thead>
              <tr>
                <th>Image</th>
                <th>Name</th>
                <th>Category</th>
                <th>Price</th>
                <th>Description</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredProducts.map((product, index) => (
                <tr key={product._id} className={index % 2 === 0 ? "even" : "odd"}>
                  <td>
                    <img
                      src={product.image}
                      alt={product.name}
                      onError={(e) => (e.target.src = "/placeholder.png")}
                    />
                  </td>
                  <td>{product.name}</td>
                  <td className="capitalize">{product.category}</td>
                  <td className="price">₹{product.price}</td>
                  <td>{product.description}</td>
                  <td className="actions">
                    <button onClick={() => openEditModal(product)} title="Edit">
                      <FiEdit2 />
                    </button>
                    <button
                      onClick={() => confirmDeleteProduct(product)}
                      title="Delete"
                    >
                      <FiTrash2 />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Scroll-to-top */}
      {showScrollTop && (
        <button onClick={scrollToTop} className="scroll-top" title="Scroll to top">
          <FiArrowUp />
        </button>
      )}

      {/* Edit Modal */}
      {isEditModalOpen && (
        <div className="modal">
          <div className="modal-backdrop"></div>
          <div className="modal-card">
            <h3>✏️ Edit Product</h3>
            <input
              type="text"
              name="name"
              value={editProduct?.name || ""}
              onChange={handleChange}
              placeholder="Product Name"
            />
            <input
              type="text"
              name="category"
              value={editProduct?.category || ""}
              onChange={handleChange}
              placeholder="Category"
            />
            <input
              type="number"
              name="price"
              value={editProduct?.price || ""}
              onChange={handleChange}
              placeholder="Price"
            />
            <textarea
              name="description"
              value={editProduct?.description || ""}
              onChange={handleChange}
              placeholder="Description"
            />
            <div className="modal-buttons">
              <button onClick={() => setIsEditModalOpen(false)}>Cancel</button>
              <button onClick={handleUpdate}>Save Changes</button>
            </div>
          </div>
        </div>
      )}

      {/* Delete Modal */}
      {isDeleteModalOpen && (
        <div className="modal">
          <div className="modal-backdrop"></div>
          <div className="modal-card" style={{ background: "#111", color: "#fff" }}>
            <h3>🛑 Delete Product</h3>
            <p>Are you sure you want to delete "{productToDelete.name}"?</p>
            <div className="modal-buttons">
              <button
                onClick={() => setIsDeleteModalOpen(false)}
                style={{ background: "#e5e7eb", color: "#111" }}
              >
                Cancel
              </button>
              <button
                onClick={handleDelete}
                style={{ background: "#ef4444", color: "#fff" }}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ListAllProducts;
