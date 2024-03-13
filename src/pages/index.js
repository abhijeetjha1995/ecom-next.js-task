import React, { useEffect, useState } from "react";
import ProductList from "../components/product-list";
import Header from "../components/header";
import axios from "axios";
import { Provider } from "react-redux";
import { store } from "../store";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import "../styles/_app.scss";
import Head from "next/head";
config.autoAddCss = false;

const HomePage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchProducts = async () => {
    setLoading(true);
    try {
      const resp = await axios.get("https://fakestoreapi.com/products");
      setProducts(resp.data);
    } catch (error) {
      console.log("error", error);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  console.log("products", products);

  if (loading) return <p>Loading</p>;

  return (
    <Provider store={store}>
      <Head>
        <title>My E-Commerce App</title>
        <meta
          name="description"
          content="A sample e-commerce app built with Next.js and Redux"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <ProductList products={products} />
    </Provider>
  );
};

export default HomePage;
