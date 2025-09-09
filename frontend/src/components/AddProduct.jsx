import React, { useState } from "react";
import { FiUpload } from "react-icons/fi";
import "./AddProduct.css";

const API_URL = "http://localhost:5000/api/products";

function AddProduct() {
  const [productData, setProductData] = useState({
    name: "",
    category: "",
    price: "",
    description: "",
  });
  const [imageFile, setImageFile] = useState(null);
  const [submitting, setSubmitting] = useState(false);

  // Toast state
  const [toast, setToast] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProductData((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e) => {
    setImageFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      const formData = new FormData();
      formData.append("name", productData.name);
      formData.append("category", productData.category);
      formData.append("price", productData.price);
      formData.append("description", productData.description);
      if (imageFile) formData.append("image", imageFile);

      const res = await fetch(API_URL, { method: "POST", body: formData });

      if (res.ok) {
        setProductData({ name: "", category: "", price: "", description: "" });
        setImageFile(null);

        // Show toast
        setToast(true);
        setTimeout(() => setToast(false), 5000);
      } else {
        alert("❌ Failed to add product");
      }
    } catch (err) {
      console.error("Error:", err);
      alert("Server error! Check console.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="add-product-container">
      <h2>➕ Add New Product</h2>
      <form className="add-product-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Enter product name"
          value={productData.name}
          onChange={handleChange}
          required
        />

        <select name="category" value={productData.category} onChange={handleChange} required>
          <option value="">Select Category</option>
          <option value="men">👔 Men</option>
          <option value="women">👗 Women</option>
          <option value="kid">🧒 Kid</option>
        </select>

        <input
          type="number"
          name="price"
          placeholder="Enter price"
          value={productData.price}
          onChange={handleChange}
          required
        />

        <label className="upload-label">
          <FiUpload className="text-3xl" />
          <span>{imageFile ? imageFile.name : "Click to upload product image"}</span>
          <input type="file" accept="image/*" onChange={handleImageChange} required style={{ display: "none" }} />
        </label>

        <textarea
          name="description"
          placeholder="Enter product description"
          value={productData.description}
          onChange={handleChange}
          rows="4"
        />

        <button type="submit" disabled={submitting} className={`submit-btn ${submitting ? "disabled" : ""}`}>
          <span className="btn-text">{submitting ? "Submitting..." : "🚀 Submit Product"}</span>
        </button>
      </form>

      {/* Toast */}
      {toast && (
        <div className="toast">
          <div className="toast-text">✅ Product submitted successfully!</div>
          <div className="toast-progress"></div>
        </div>
      )}
    </div>
  );
}

export default AddProduct;
