import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="posts">Posts</NavLink>
      <NavLink to="newposts">New Posts</NavLink>
    </nav>
  );
};

export default Navbar;
