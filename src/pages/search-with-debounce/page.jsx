import { useCallback, useEffect, useState } from "react";
import { useDebounce } from "./_components/use-debounce";
import QuestionHeader from "@/components/question-header";

export default function ProductsPage() {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [query, setQuery] = useState("");

  const limit = 12;

  const fetchData = useCallback(async (q) => {
    try {
      setLoading(true);
      const res = await fetch(
        `https://dummyjson.com/products/search?q=${q}&limit=${limit}`
      );
      if (!res.ok) throw new Error("Failed to fetch products");
      const data = await res.json();
      setProducts(data.products);
    } catch (error) {
      console.error(error);
      setProducts([]);
    } finally {
      setLoading(false);
    }
  }, []);

  const debouncedFetch = useDebounce(fetchData, 500);

  useEffect(() => {
    debouncedFetch(query);
  }, [query, debouncedFetch]);

  return (
    <div>
      <QuestionHeader />

      <section className="container mx-auto">
        <div className="mb-4">
          <input
            className="border border-gray-400 rounded-md p-2 w-full max-w-xs"
            placeholder="Search products"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
            }}
            type="search"
            aria-label="Search products"
          />
        </div>

        <div className="mb-4">
          <p className="text-lg font-medium">Products</p>
        </div>
        <div className="mb-4">
          <p className="text-md">{query && `Results for "${query}"`}</p>
        </div>

        {loading ? (
          <p>Loading...</p>
        ) : products.length === 0 ? (
          <p>No products found</p>
        ) : null}

        <div
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ${
            loading ? "opacity-50" : ""
          }`}
        >
          {products.map((product) => (
            <div
              className="border border-gray-400 rounded-md p-2 flex flex-col items-center"
              key={product.id}
            >
              <img
                src={product.images[0]}
                alt={product.title}
                className="w-48 object-contain"
                loading="lazy"
              />
              <p className="mt-2 text-center">{product.title}</p>
              <p className="mt-2 text-center font-medium">${product.price}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
