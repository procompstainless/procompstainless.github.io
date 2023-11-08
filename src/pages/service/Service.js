import React from "react";
import { useParams } from "react-router-dom";
import SplitHero from "../../components/SplitHero";
import HighlightSection from "../../components/HighlightSection";
import SecondaryButton from "../../components/buttons/SecondaryButton";
import styles from "./Service.module.css";
import services from "../../data/services";

const ServicePage = () => {
  // determine the type of service by grabbing that information from the URL.
  const params = useParams();
  let serviceID = params.id;

  return (
    <>
      <SplitHero
        label={services[serviceID].hero.label}
        title={services[serviceID].hero.title}
        body={services[serviceID].hero.body}
        button={services[serviceID].hero.button}
        onClick={services[serviceID].hero.onClick}
        image={services[serviceID].hero.image}
      ></SplitHero>
      {services[serviceID].articles?.map((article) => {
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

export default ServicePage;
