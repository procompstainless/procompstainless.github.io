import React from "react";
import styles from "./Error.module.css";
import PrimaryButton from "../../components/buttons/PrimaryButton";

const ErrorPage = () => {
  return (
    // Have button that brings the user home.
    <>
      <div className={styles["error-container"]}>
        <h2 className={styles.center}>Looks like something went wrong...</h2>
        <p className={styles.center}>
          Don't worry, you can still return back to the home page by clicking
          the button below.
        </p>
        <PrimaryButton
          className={styles.center}
          boxShadow={false}
          size="medium"
          onClick={() => {
            window.location.href = "/";
          }}
          text="Go Back Home"
        />
      </div>
    </>
  );
};

export default ErrorPage;
