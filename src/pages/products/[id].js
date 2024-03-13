import React from 'react';
import ViewProduct from '../../components/ViewProduct';

const Product = ({ product }) => {
  return <ViewProduct product={product} />;
};

async function fetchProducts() {
  const response = await fetch('https://fakestoreapi.com/products');
  const products = await response.json();
  return products;
}

async function fetchProductById(id) {
  const response = await fetch(`https://fakestoreapi.com/products/${id}`);
  const product = await response.json();
  return product;
}

export async function getStaticPaths() {
  const products = await fetchProducts();
  const paths = products.map((product) => ({
    params: { id: product.id.toString() },
  }));

  return { paths, fallback: 'blocking' };
}

export async function getStaticProps({ params }) {
  const product = await fetchProductById(params.id);
  return { props: { product } };
}

export default Product;