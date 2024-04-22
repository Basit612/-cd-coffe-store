import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Navbar from "../components/Navbar/Navbar";


const Main = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Outlet></Outlet>
    </div>
  );
};

export default Main;