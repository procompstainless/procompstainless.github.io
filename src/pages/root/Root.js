import React from "react";
import Navbar from "../../components/Navbar";
import { Outlet } from "react-router-dom";
import styles from "./Root.module.css";
import Footer from "../../components/Footer";

const RootLayout = () => {
  return (
    <div className={styles["App"]}>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default RootLayout;
