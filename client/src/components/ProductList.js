import React, { useState, useEffect } from "react";
import AddProductForm from "./AddProductForm";
const API_URL = process.env.REACT_APP_API_URL || "http://localhost:5000";

function ProductList() {
    const [products, setProducts] = useState([]);
    const [editingProduct, setEditingProduct] = useState(null);

    async function fetchProducts() {
        const res = await fetch(`${API_URL}/api/products`);
        const data = await res.json();
        console.log(data);
        setProducts(data);
    }

    useEffect(() => {
        fetchProducts();
    }, []);

    const handleProductAdded = (newProduct) => {
        setProducts([...products, newProduct]);
    };

    const handleProductUpdated = (updatedProduct) => {
        setProducts(
            products.map((p) => (p._id === updatedProduct._id ? updatedProduct : p))
        );
    };

    const handleDelete = async (id) => {
        await fetch(`${API_URL}/api/products/${id}`, { method: 'DELETE' });
        setProducts(products.filter((p) => p._id !== id));
    };

    const handleEdit = (product) => {
        setEditingProduct(product);
    };

    const clearing = () => {
        setEditingProduct(null);
    };

    return (
        <div className="w-full max-w-5xl px-4">
            {/* Centered container */}
            <div className="w-full p-8 bg-white shadow-lg rounded-lg mx-auto">
                <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">
                    📦 Inventory Manager
                </h2>

                {/* Form */}
                <div className="mb-10">
                    <AddProductForm
                        onProductAdded={handleProductAdded}
                        editingProduct={editingProduct}
                        onProductUpdated={handleProductUpdated}
                        clearEditing={clearing}
                    />
                </div>

                {/* Product List */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {products.map((p) => (
                        <div
                            key={p._id}
                            className="bg-gray-50 shadow-md rounded-lg p-6 flex flex-col items-center"
                        >
                            <h3 className="text-xl font-semibold mb-2 text-gray-900 text-center">
                                {p.name}
                            </h3>
                            <p className="text-gray-700 text-center">Quantity: {p.quantity}</p>
                            <p className="text-gray-700 text-center">Category: {p.category}</p>
                            <p className="text-gray-800 font-medium text-center">
                                Price: ₹{new Intl.NumberFormat("en-IN").format(p.price)}
                            </p>

                            <div className="mt-4 flex justify-center text-center gap-3">
                                <button
                                    onClick={() => handleEdit(p)}
                                    className="px-4 py-2 bg-blue-400 text-white rounded hover:bg-blue-600 transition"
                                >
                                    Edit
                                </button>
                                <button
                                    onClick={() => handleDelete(p._id)}
                                    className="px-4 py-2 bg-red-400 text-white rounded hover:bg-red-600 transition"
                                >
                                    Delete
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default ProductList;