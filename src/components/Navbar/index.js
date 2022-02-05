import { NavLink } from "react-router-dom";
import { useAuth } from "../../utils/Auth";

export const Navbar = () => {
  const auth = useAuth();

  return (
    <nav className="primary-nav">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/products">Products</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/users">Users</NavLink>
      {auth.user && <NavLink to="/profile">Profile</NavLink>}
      {!auth.user && <NavLink to="/login">Login</NavLink>}
    </nav>
  );
};
