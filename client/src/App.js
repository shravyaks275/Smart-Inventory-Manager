import React from "react";
import ProductList from "./components/ProductList";

function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4 sm:p-8">
      <h1 className="text-4xl font-bold mb-6 text-gray-800 text-center">
        Smart Inventory Manager
      </h1>
      <ProductList />
    </div>
  );
}

export default App;