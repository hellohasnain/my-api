import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="text-[20px]">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/About">About</NavLink>
      <NavLink to="api">Api</NavLink>
      <NavLink to="Showname">Showname</NavLink>
      <NavLink to="Setcount">Setcount</NavLink>
    </nav>
  );
};

export default Navbar;
