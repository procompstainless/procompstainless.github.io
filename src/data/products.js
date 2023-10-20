import UTILITY_PANELS from "../images/products/utility panels/ceilingPanelInstalled.jpg";
import DESIGN_IMAGE from "../images/products/utility panels/panelRender.png";
import EXPERTISE_IMAGE from "../images/products/utility panels/rowCeilingPanels.png";
import PIPE_AND_TUBE from "../images/products/pipeandtube/inventoryFishEye3.png";
import TUBE_DETAILS from "../images/products/pipeandtube/packedTube.png";
import TUBE_STOCK from "../images/products/pipeandtube/BoxedTube.png";
import TUBE_SERVICES from "../images/products/pipeandtube/oxygenTanks.png";
import FITTINGS from "../images/products/fittings/elbows.jpg";
import FITTINGS_DETAILS from "../images/products/fittings/cappedTees.jpg";
import FITTINGS_STOCK from "../images/products/fittings/inventoryRack1.png";
import INSTRUMENTATION from "../images/products/instrumentation/inventoryRack2.png";
import PROCESSING_INSTRUMENTS from "../images/ceiling_panels.png";
import ELECTRICAL_COMPONENTS from "../images/ceiling_panels.png";
import AUTOMATION_EQUIPMENT from "../images/ceiling_panels.png";

const products = {
  "utility-panels": {
    id: "utility-panels",
    title: "Utility Panels",
    hero: {
      label: "UTILITY PANELS",
      title: "Bringing utilities into your clean space.",
      body: "Our utility panels can be installed in the ceiling or the wall and have been used to add different utilities into the clean room space, namely oxygen, nitorgen, clean air, and water.",
      button: "Get a Quote",
      onClick: () => {
        console.log("this is the button function for 'UTILITY PANELS' label");
      },
      image: UTILITY_PANELS,
    },
    articles: [
      {
        id: 1,
        label: "DESIGN",
        title: "Engineering The Best Solutions",
        body: "Our team of engineers is led by decades of experience. Our designers use the latest modeling software and work directly with the fabrication team to ensure designs meet construction requirements",
        button: "Get a Quote",
        onClick: () => {
          console.log("this is the button function for the 'DESIGN' label");
        },
        image: DESIGN_IMAGE,
      },
      {
        id: 2,
        label: "EXPERTISE",
        title: "We Understand Your Process",
        body: "The leaders on our team have been in the process industry business for over 35 years. We've dedicated our lives to this industry and our wisdom guides us in delivering top quality process solutions.",
        button: "Get a Quote",
        onClick: () => {
          console.log("this is the button function for the 'EXPERTISE' label");
        },
        image: EXPERTISE_IMAGE,
      },
    ],
  },
  "pipe-and-tube": {
    id: "pipe-and-tube",
    title: "Pipe and Tube",
    hero: {
      label: "PIPE AND TUBE",
      title: "Hygienic tubing for all processing needs.",
      body: "We are the most competitive source for high quality, hygienic tubing across the United States. We have thousands of feet in stock.",
      button: "Request Quote",
      onClick: () => {
        console.log("this is the button function for 'pipe and tube' label");
      },
      image: PIPE_AND_TUBE,
    },
    articles: [
      {
        id: 1,
        label: "STANDARDS",
        title: "The quality of tubing matters",
        body: "We only sell high-purity stainless steel tubing that is accompanied with the right documentation to certify quality standards our met. We also provide oxygen cleaning service upon request.",
        button: "Get a Quote",
        onClick: () => {
          console.log("this is the button function for the 'standards' label");
        },
        image: TUBE_DETAILS,
      },
      {
        id: 2,
        label: "OUR STOCK",
        title: "Tubing we have on hand",
        body: "We typically have SF1. [insert details about our tubing stock.]",
        button: "Get a Quote",
        onClick: () => {
          console.log("this is the button function for the 'EXPERTISE' label");
        },
        image: TUBE_STOCK,
      },
      {
        id: 3,
        label: "SERVICES",
        title: "Oxygen cleaning and more",
        body: "[insert details about our tubing services.",
        button: "Get a Quote",
        onClick: () => {
          console.log("this is the button function for the 'services' label");
        },
        image: TUBE_SERVICES,
      },
    ],
  },
  fittings: {
    id: "fittings",
    title: "Fittings",
    hero: {
      label: "FITTINGS",
      title: "Pharmaceutical grade stainless steel components.",
      body: "[INSERT]",
      button: "Request Quote",
      onClick: () => {
        console.log("this is the button function for 'FITTINGS' label");
      },
      image: FITTINGS,
    },
    articles: [
      {
        id: 1,
        label: "OUR PARTNERS",
        title: "We only work with the best",
        body: "Our stock items are from MaxPure and....",
        button: "Get a Quote",
        onClick: () => {
          console.log(
            "this is the button function for the 'our partners' label"
          );
        },
        image: FITTINGS_DETAILS,
      },
      {
        id: 2,
        label: "OUR STOCK",
        title: "Fittings we have on hand",
        body: "[insert details about our fittings stock.",
        button: "Get a Quote",
        onClick: () => {
          console.log("this is the button function for the 'OUR STOCK' label");
        },
        image: FITTINGS_STOCK,
      },
    ],
  },
  instrumentation: {
    id: "instrumentation",
    title: "Instrumentation",
    hero: {
      label: "INSTRUMENTATION",
      title: "Control and automate your process.",
      body: "[INSERT]",
      button: "Request Quote",
      onClick: () => {
        console.log("this is the button function for 'instrumentation' label");
      },
      image: INSTRUMENTATION,
    },
    articles: [
      {
        id: 1,
        label: "PROCESSING INSTRUMENTS",
        title: "We only work with the best",
        body: "Our stock items are from PBM and Steriflo....",
        button: "Get a Quote",
        onClick: () => {
          console.log(
            "this is the button function for the 'processing instruments' label"
          );
        },
        image: PROCESSING_INSTRUMENTS,
      },
      {
        id: 2,
        label: "ELECTRICAL COMPONENTS",
        title: "Electrical receptacles and data connections",
        body: "[insert details about our electrical offerings.]",
        button: "Get a Quote",
        onClick: () => {
          console.log("this is the button function for the 'electrical' label");
        },
        image: ELECTRICAL_COMPONENTS,
      },
      {
        id: 3,
        label: "AUTOMATION EQUIPMENT",
        title: "Enhance your system with automation",
        body: "[insert details about our automation capabilities.",
        button: "Get a Quote",
        onClick: () => {
          console.log("this is the button function for the 'AUTOMATION' label");
        },
        image: AUTOMATION_EQUIPMENT,
      },
    ],
  },
};
export default products;
