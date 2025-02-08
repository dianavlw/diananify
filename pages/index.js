import { useEffect, useState } from "react";
import axios from "axios";

export default function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("/api/products").then((res) => setProducts(res.data));
  }, []);

  return (
    <div>
      <h1 className="text-2xl font-bold">Shop Our Collection</h1>
      <div className="grid grid-cols-2 gap-4">
        {products.map((product) => (
          <div key={product.id} className="border p-4">
            <h2>{product.name}</h2>
            <p>${product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
