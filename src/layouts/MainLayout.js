import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const MainLayout = () => {
  return (
    <div>
      <div className="navbar">
        <Navbar />
      </div>
      <main className="main-content">
        <Outlet />
      </main>
    </div>
  );
};

export default MainLayout;
