import React from "react";
import styles from "./Home.module.css";

import WideSection from "../../components/WideSection";
import HighlightSection from "../../components/HighlightSection";
import Highlights from "../../components/Highlights";
import Hero from "../../components/Hero";
import CardList from "../../components/CardList";
import CARD_IMAGE from "../../images/logo_2023_150ppi.png";
import { Divider } from "@mui/material";
import { Navigate } from "react-router-dom";
import products from "../../data/products";

const HomePage = () => {
  // const productCardList = [
  //   {
  //     id: products,
  //     image: CARD_IMAGE,
  //     title: "Utility Panels",
  //     description: "Utility Panels or whatever",
  //     buttons: [
  //       {
  //         id: 1,
  //         name: "Learn More",
  //         onClick: () => {
  //           Navigate("/products/utility-panels");
  //         },
  //       },
  //     ],
  //   },
  //   {
  //     id: 2,
  //     image: CARD_IMAGE,
  //     title: "Quality Assurance",
  //     description: "Quality Assurance",
  //     buttons: [
  //       {
  //         id: 2,
  //         name: "Learn More",
  //         onClick: () => {
  //           Navigate("/products/utility-panels");
  //         },
  //       },
  //     ],
  //   },
  //   {
  //     id: 3,
  //     image: CARD_IMAGE,
  //     title: "Hygienic Components",
  //     description: "Hygienic Components",
  //     buttons: [
  //       {
  //         id: 3,
  //         name: "Learn More",
  //         onClick: () => {
  //           Navigate("/products/utility-panels");
  //         },
  //       },
  //     ],
  //   },
  // ];

  const productsList = Object.entries(products).map((entry) => entry[1]);
  console.log(productsList);
  const displayProducts = ["utility-panels", "fittings", "instrumentation"];

  return (
    <>
      <Hero></Hero>
      <WideSection title="Custom Fabrication">
        <CardList list={productsList} displayItems={displayProducts} />
      </WideSection>
      <Divider />
      <WideSection title="Services We Offer">
        <CardList list={productsList} displayItems={displayProducts} />
      </WideSection>
      <Divider />
      {/* <HighlightSection title={"Highlight Section"} background={"#eeeeee"}>
        <Highlights />
      </HighlightSection> */}
    </>
  );
};

export default HomePage;
