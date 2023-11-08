import React from "react";
import styles from "./Home.module.css";

import WideSection from "../../components/WideSection";
import Hero from "../../components/Hero";
import CardList from "../../components/CardList";
import { Divider } from "@mui/material";
import products from "../../data/products";
import services from "../../data/services";
import HERO_IMAGE from "../../images/panels_american_flag.png";

const HomePage = () => {
  const productsToShow = ["utility-panels", "fittings", "instrumentation"];
  const productsCardList = Object.entries(products)?.map((entry) => {
    if (productsToShow.length < 1 || productsToShow.indexOf(entry[1].id) > -1) {
      return entry[1];
    }
  });

  const servicesToShow = [
    "engineering-design",
    "orbital-welding",
    "oxygen-service",
  ];
  const serviceCardList = Object.entries(services)?.map((entry) => {
    if (servicesToShow.length < 1 || servicesToShow.indexOf(entry[1].id) > -1) {
      return entry[1];
    }
  });
  console.log(serviceCardList);

  return (
    <>
      <Hero
        title="Solutions for your hygienic process facilities."
        image={HERO_IMAGE}
        primaryButton="Contact Our Team"
        primaryOnClick={() => {
          window.location.href =
            "https://procomp-inc-44078592.hubspotpagebuilder.com/high-quality-materials-and-custom-solutions-contact-our-team-procomp";
        }}
        secondaryButton="Learn More"
        secondaryOnClick={() => {
          window.location.href = "/services/custom-fabrication";
        }}
      ></Hero>
      <WideSection title="Custom Fabrication">
        <CardList list={productsCardList} />
      </WideSection>
      <Divider />
      <WideSection title="Services We Offer">
        <CardList list={serviceCardList} />
      </WideSection>
      <Divider />
    </>
  );
};

export default HomePage;
