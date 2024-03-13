import React from "react";
import { NextSeo } from "next-seo";
import SEO from "../../seo.config";
import Image from "next/image";

const ViewProduct = ({ product }) => {
  const { title, description, image } = product;

  const seo = {
    ...SEO,
    title: `${title} - My Next.js App`,
    description,
    openGraph: {
      ...SEO.openGraph,
      images: [
        {
          url: image,
          width: 800,
          height: 600,
          alt: title,
        },
      ],
    },
  };

  return (
    <>
      <NextSeo {...seo} />
      <h1>{title}</h1>
      <p>{description}</p>
      {/* <img src={image} alt={title} /> */}
      <Image width={100} height={100} alt={product.name} src={image} />
    </>
  );
};

export default ViewProduct;
