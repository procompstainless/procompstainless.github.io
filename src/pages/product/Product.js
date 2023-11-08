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
  let productID = params.id;

  return (
    <>
      <SplitHero
        label={products[productID].hero.label}
        title={products[productID].hero.title}
        body={products[productID].hero.body}
        button={products[productID].hero.button}
        onClick={products[productID].hero.onClick}
        image={products[productID].hero.image}
      ></SplitHero>
      {products[productID].articles.map((article) => {
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
