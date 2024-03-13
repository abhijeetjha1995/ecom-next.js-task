import React, { useState, useMemo } from "react";
import ProductItem from "./product-item";
import styles from "../styles/product-list.module.scss";
import PriceFilter from "./price-filter";
import { UiSelect, UiButton } from "./ui";

const categories = [
  { value: "", name: "All" },
  { value: "women's clothing", name: "Women's clothing" },
  { value: "jewelery", name: "Jewelery" },
  { value: "men's clothing", name: "Men's clothing" },
  { value: "electronics", name: "Electronics" },
];

const ratings = [
  { value: "0", name: "All" },
  { value: "1", name: "1 Star & Above" },
  { value: "2", name: "2 Star & Above" },
  { value: "3", name: "3 Star & Above" },
  { value: "4", name: "4 Star & Above" },
  { value: "5", name: "5 Stars" },
];

const ProductList = ({ products }) => {
  const [filters, setFilters] = useState({});

  const [form, setForm] = useState({
    category: "",
    minPrice: 0,
    maxPrice: 1000,
    rating: 0,
  });

  const filteredProducts = useMemo(() => {
    let filtered = products;

    if (filters.category) {
      filtered = filtered.filter(
        (product) => product.category === filters.category
      );
    }

    if (filters.minPrice > 0) {
      filtered = filtered.filter(
        (product) => product.price >= filters.minPrice
      );
    }

    if (filters.maxPrice < Number.MAX_VALUE) {
      filtered = filtered.filter(
        (product) => product.price <= filters.maxPrice
      );
    }

    if (filters.rating > 0) {
      filtered = filtered.filter(
        (product) => product.rating.rate >= filters.rating
      );
    }
    return filtered;
  }, [filters, products]);

  const handleFilterChange = (event) => {
    const { name, value } = event.target;
    setForm((prevFilters) => ({
      ...prevFilters,
      [name]: value,
    }));
  };
  console.log("filteredProducts", filteredProducts);
  return (
    <>
      <div className={styles.filterContainer}>
        <UiSelect
          options={categories}
          label="Category"
          name="category"
          value={form.category}
          onChange={handleFilterChange}
        />
        <UiSelect
          label="Rating"
          name="rating"
          options={ratings}
          value={form.rating}
          onChange={handleFilterChange}
        />
        <PriceFilter values={form} onChange={handleFilterChange} />
        <UiButton
          styles={styles.button}
          onClick={() => setFilters({ ...form })}
        >
          Filter
        </UiButton>
      </div>
      <div className={styles.productList}>
        <div className={styles.productList}>
          {filteredProducts.map((product) => (
            <ProductItem key={product.id} product={product} />
          ))}
        </div>
      </div>
    </>
  );
};

export default ProductList;
