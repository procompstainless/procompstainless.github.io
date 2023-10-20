import { useParams } from "react-router-dom";
import React from "react";
import SplitHero from "../../components/SplitHero";
import styles from "./Product.module.css";
import HighlightSection from "../../components/HighlightSection";
import SecondaryButton from "../../components/buttons/SecondaryButton";
import products from "../../data/products";

const ProductPage = () => {
  // determine the type of product by grabbing that information from the URL.
  const params = useParams();
  let productId = params.id;

  return (
    <>
      <SplitHero
        label={products[productId].hero.label}
        title={products[productId].hero.title}
        body={products[productId].hero.body}
        button={products[productId].hero.button}
        onClick={products[productId].hero.onClick}
        image={products[productId].hero.image}
      ></SplitHero>
      {products[productId].articles.map((article) => {
        return (
          <HighlightSection
            id={article.id}
            image={article.image}
            imageAlt={""}
            label={article.label}
            title={article.title}
            body={article.body}
            button={
              <SecondaryButton
                text={article.button}
                onClick={article.onClick}
              ></SecondaryButton>
            }
          ></HighlightSection>
        );
      })}
    </>
  );
};

export default ProductPage;
