"use client";
import React, { useEffect, useState } from "react";

// Define the structure of a product
interface Product {
    id: number;
    name: string;
    description: string;
    price: number;
}

export default function Home() {
    const [products, setProducts] = useState<Product[] | null>(null); // Initially NULL to match SSR output
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
      const fetchProducts = async () => {
          try {
              const res = await fetch("http://localhost:1337/api/products");
              if (!res.ok) {
                  throw new Error("Failed to fetch products");
              }
  
              const data = await res.json();
              console.log("API Response:", data);
  
              if (data && data.data && Array.isArray(data.data)) {
                  const formattedProducts = data.data.map((item: any) => ({
                      id: item.id,
                      name: item.Name || "Unnamed Product",
                      description: Array.isArray(item.Description) && item.Description.length > 0
                          ? item.Description.map((desc: any) => desc.children).join(", ")  // Extract text
                          : "No description available",
                      price: item.Price || 0,
                  }));
  
                  setProducts(formattedProducts);
              } else {
                  setError("Invalid data format received.");
              }
          } catch (err) {
              setError("Error fetching data from the server");
              console.error("Fetch error:", err);
          } finally {
              setLoading(false);
          }
      };
  
      fetchProducts();
  }, []);
  
  
  

    return (
        <div className="min-h-screen p-10 bg-gray-100">
            <h1 className="text-3xl font-bold text-center text-gray-800">Product List</h1>
            {loading && (
                <div className="text-center mt-4">
                    <p className="text-gray-600">Loading Products...</p>
                </div>
            )}
            {error && <div className="text-red-500 text-center mt-4"><p>{error}</p></div>}
            {!loading && products && products.length === 0 && (
                <p className="text-center text-gray-600">No products available</p>
            )}
            {!loading && products && (
                <div className="mt-6 grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                    {products.map((product) => (
                        <div key={product.id} className="bg-white p-6 rounded-lg shadow-lg">
                            <h2 className="text-xl font-semibold">{product.name}</h2>
                            <p className="text-gray-600 mt-2">{product.description}</p>
                            <p className="text-green-600 font-bold mt-2">${product.price}</p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
