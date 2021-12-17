import React from "react";
import Header from "../Header";
import styles from "./Wrapper.module.css";

const Wrapper = ({ children }) => {
  return (
    <div className={styles.wrapper}>
      <Header />
      <div className={styles.wrapperBody}>{children}</div>
    </div>
  );
};

export default Wrapper;
