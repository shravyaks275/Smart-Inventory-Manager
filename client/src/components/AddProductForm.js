import React, { useState, useEffect } from "react";
const API_URL = process.env.REACT_APP_API_URL || "http://localhost:5000";

function AddProductForm({ onProductAdded, editingProduct, onProductUpdated, clearEditing }) {
    const [formData, setFormData] = useState({
        name: "",
        quantity: "",
        category: "",
        price: ""
    });

    // Prefill form when editing
    useEffect(() => {
        if (editingProduct) {
            setFormData({
                name: editingProduct.name,
                quantity: editingProduct.quantity,
                category: editingProduct.category,
                price: editingProduct.price
            });
        }
    }, [editingProduct]);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (editingProduct) {
            // ✏️ Update existing product
            const res = await fetch(`${API_URL}/api/products/${editingProduct._id}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });
            const data = await res.json();
            onProductUpdated(data);
            clearEditing(); // reset editing state
        } else {
            // ➕ Add new product
            const res = await fetch(`${API_URL}/api/products`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });
            const data = await res.json();
            onProductAdded(data);
        }

        // Reset form
        setFormData({ name: "", quantity: "", category: "", price: "" });
    };

    return (
        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4 p-6 border border-gray-300 rounded-lg bg-gray-50 shadow-sm">
            <input
                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Product Name"
                required
            />
            <input
                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                name="quantity"
                type="number"
                value={formData.quantity}
                onChange={handleChange}
                placeholder="Quantity"
                required
            />
            <input
                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                name="category"
                value={formData.category}
                onChange={handleChange}
                placeholder="Category"
                required
            />
            <input
                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                name="price"
                type="number"
                value={formData.price}
                onChange={handleChange}
                placeholder="Price"
                required
            />
            <div className="md:col-span-2 flex gap-4 mt-2">
                <button type="submit" className="w-full bg-blue-500 text-white p-3 rounded hover:bg-blue-600 transition font-semibold">
                    {editingProduct ? "Update Product" : "Add Product"}
                </button>
                {editingProduct && (
                    <button type="button" onClick={clearEditing} className="w-full bg-gray-400 text-white p-3 rounded hover:bg-gray-500 transition font-semibold">
                        Cancel
                    </button>
                )}
            </div>
        </form>
    );
}

export default AddProductForm;