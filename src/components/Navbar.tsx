import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="w-full flex justify-center items-center gap-4">
      <Link to="/">Home Page</Link>
      <Link to="/us"> Us Home Page</Link>
    </div>
  );
};

export default Navbar;
