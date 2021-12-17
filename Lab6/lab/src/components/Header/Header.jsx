import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";

const Header = () => {
  const { isAuth } = useSelector((state) => state.auth);
  return (
    <div className={styles.header}>
      <div className={styles.headerContainer}>
        <div className={styles.headerItem}>
          <ul className={styles.list}>
            <li className={styles.listItem}>
              <Link className={styles.listLink} to="/">
                Main
              </Link>
            </li>
            <li className={styles.listItem}>
              <Link className={styles.listLink} to="/users">
                Users
              </Link>
            </li>
            <li className={styles.listItem}>
              <Link className={styles.listLink} to="/friends">
                Friends
              </Link>
            </li>
            {isAuth && (
              <li className={styles.listItem}>
                <Link className={styles.listLink} to="/profile">
                  Profile
                </Link>
              </li>
            )}
          </ul>
        </div>
        <div className={styles.headerItem}>
          <Link to="/sign-in" className={styles.headerReg}>
            Sign in
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
