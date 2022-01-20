import { Link, NavLink, Outlet } from "react-router-dom";
import styles from "./Products.module.css";

export const Products = () => {
  return (
    <>
      <nav className="secondary-nav">
        <Link to="">All</Link>
        <NavLink to="women">Women</NavLink>
        <NavLink to="men">Men</NavLink>
        <NavLink to="kids">Kids</NavLink>
      </nav>
      <div className={styles.content}>
        <Outlet />
      </div>
    </>
  );
};
