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
  "custom-fabrication": {
    id: "custom-fabrication",
    title: "Custom Fabrication",
    hero: {
      label: "Custom Fabrication",
      title: "Creative solutions for practical application",
      body: "Our shop team is led by over 35 years of industry experience in stainless steel fabrication. We can build almost anything from steel materials. We currently put our skills to use fabricating clean room utility panels from hygienic materials and process instruments.",
      button: "Get a Quote",
      onClick: () => {
        console.log(
          "this is the button function for 'Custom fabrication' label"
        );
      },
      image: UTILITY_PANELS,
    },
    articles: [
      {
        id: 1,
        label: "EXPERIENCE",
        title: "Experience You Can Rely On",
        body: "Our team has been in the business for decades. We know how to deliver for your needs, keep compliant, and do it on time. You can rely on our experience for your next job.",
        button: "Get a Quote",
        onClick: () => {
          console.log("this is the button function for the 'EXPERIENCE' label");
        },
        image: DESIGN_IMAGE,
      },
      {
        id: 2,
        label: "OUR SHOP",
        title: "We Have The Right Tools",
        body: "Our fab shop is where the magic happens. We have the equipment we need to fabricate panels efficiently. You can trust us to complete your job the right way and stay on schedule.",
        button: "Get a Quote",
        onClick: () => {
          console.log("this is the button function for the 'OUR SHOP' label");
        },
        image: EXPERTISE_IMAGE,
      },
    ],
  },
  "engineering-design": {
    id: "engineering-design",
    title: "Engineering Design",
    hero: {
      label: "Engineering Design",
      title: "Involved From The Initial Concept",
      body: "Our team of engineers are brought into the picture early on in the design process. Our clients depend on us to bring working solutions to the table. We provide 3-D models of equipment structures to determine feasibility and configure new design concepts.",
      button: "Request Quote",
      onClick: () => {
        console.log(
          "this is the button function for 'Engineering Design' label"
        );
      },
      image: PIPE_AND_TUBE,
    },
    articles: [
      {
        id: 1,
        label: "CREATIVITY",
        title: "Engineering a Better Reality",
        body: "Imagination is the most important tool in providing value for our clients. We are constantly looking improve structural designs to enhance functionality, safety, and compliance.",
        button: "Get a Quote",
        onClick: () => {
          console.log("this is the button function for the 'CREATIVITY' label");
        },
        image: TUBE_DETAILS,
      },
      {
        id: 2,
        label: "TECHNOLOGY",
        title: "Seeing is Believing",
        body: "We use cutting-edge modeling software to provide the most precise visuals for our clients. A more accurate plan leads to more accurate results.",
        button: "Get a Quote",
        onClick: () => {
          console.log("this is the button function for the 'TECHNOLOGY' label");
        },
        image: TUBE_STOCK,
      },
    ],
  },
  "orbital-welding": {
    id: "orbital-welding",
    title: "Orbital Welding",
    hero: {
      label: "Orbital Welding",
      title: "High-integrity Welds for Clean Processing",
      body: "We have trained professionals operating our orbital welding machines. We provide weld coupons, weld maps, and keep stringent records of all our welds to control quality.",
      button: "Request Quote",
      onClick: () => {
        console.log("this is the button function for 'orbital-welding' label");
      },
      image: FITTINGS,
    },
    // articles: [
    //   {
    //     id: 1,
    //     label: "OUR PARTNERS",
    //     title: "We only work with the best",
    //     body: "Our stock items are from MaxPure and....",
    //     button: "Get a Quote",
    //     onClick: () => {
    //       console.log(
    //         "this is the button function for the 'our partners' label"
    //       );
    //     },
    //     image: FITTINGS_DETAILS,
    //   },
    //   {
    //     id: 2,
    //     label: "OUR STOCK",
    //     title: "Fittings we have on hand",
    //     body: "[insert details about our fittings stock.",
    //     button: "Get a Quote",
    //     onClick: () => {
    //       console.log("this is the button function for the 'OUR STOCK' label");
    //     },
    //     image: FITTINGS_STOCK,
    //   },
    // ],
  },
  "oxygen-service": {
    id: "oxygen-service",
    title: "Oxygen Service",
    hero: {
      label: "Oxygen Service",
      title: "We Keep Our Tube Clean",
      body: "Our cleaning process is performed for all orders leaving our shop. All inventory tubing and piping is certified cleaned for oxygen service and packaged in our facility before being shipped to our clients.",
      button: "Request Quote",
      onClick: () => {
        console.log("this is the button function for 'oxygen-service' label");
      },
      image: INSTRUMENTATION,
    },
    // articles: [
    //   {
    //     id: 1,
    //     label: "PROCESSING INSTRUMENTS",
    //     title: "We only work with the best",
    //     body: "Our stock items are from PBM and Steriflo....",
    //     button: "Get a Quote",
    //     onClick: () => {
    //       console.log(
    //         "this is the button function for the 'processing instruments' label"
    //       );
    //     },
    //     image: PROCESSING_INSTRUMENTS,
    //   },
    //   {
    //     id: 2,
    //     label: "ELECTRICAL COMPONENTS",
    //     title: "Electrical receptacles and data connections",
    //     body: "[insert details about our electrical offerings.]",
    //     button: "Get a Quote",
    //     onClick: () => {
    //       console.log("this is the button function for the 'electrical' label");
    //     },
    //     image: ELECTRICAL_COMPONENTS,
    //   },
    //   {
    //     id: 3,
    //     label: "AUTOMATION EQUIPMENT",
    //     title: "Enhance your system with automation",
    //     body: "[insert details about our automation capabilities.",
    //     button: "Get a Quote",
    //     onClick: () => {
    //       console.log("this is the button function for the 'AUTOMATION' label");
    //     },
    //     image: AUTOMATION_EQUIPMENT,
    //   },
    // ],
  },
  "quality-inspection": {
    id: "quality-inspection",
    title: "Quality Inspection",
    hero: {
      label: "quality inspection",
      title: "We Are Pioneers of Quality Standards",
      body: "It isn't too long ago when the processing industry did not have ASME BPE standards. The ProCOMP team was involved in forming the BPE specifications we adhere to today.",
      button: "Request Quote",
      onClick: () => {
        console.log(
          "this is the button function for 'quality-inspection' label"
        );
      },
      image: INSTRUMENTATION,
    },
    // articles: [
    //   {
    //     id: 1,
    //     label: "PROCESSING INSTRUMENTS",
    //     title: "We only work with the best",
    //     body: "Our stock items are from PBM and Steriflo....",
    //     button: "Get a Quote",
    //     onClick: () => {
    //       console.log(
    //         "this is the button function for the 'processing instruments' label"
    //       );
    //     },
    //     image: PROCESSING_INSTRUMENTS,
    //   },
    //   {
    //     id: 2,
    //     label: "ELECTRICAL COMPONENTS",
    //     title: "Electrical receptacles and data connections",
    //     body: "[insert details about our electrical offerings.]",
    //     button: "Get a Quote",
    //     onClick: () => {
    //       console.log("this is the button function for the 'electrical' label");
    //     },
    //     image: ELECTRICAL_COMPONENTS,
    //   },
    //   {
    //     id: 3,
    //     label: "AUTOMATION EQUIPMENT",
    //     title: "Enhance your system with automation",
    //     body: "[insert details about our automation capabilities.",
    //     button: "Get a Quote",
    //     onClick: () => {
    //       console.log("this is the button function for the 'AUTOMATION' label");
    //     },
    //     image: AUTOMATION_EQUIPMENT,
    //   },
    // ],
  },
};
export default products;
