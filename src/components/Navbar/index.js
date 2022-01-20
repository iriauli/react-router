import { NavLink } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="primary-nav">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/products">Products</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/users">Users</NavLink>
    </nav>
  );
};
