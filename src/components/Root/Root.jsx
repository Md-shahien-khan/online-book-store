import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import Navbar from "../NavBar/Navbar";

const Root = () => {
    return (
        <div className="max-w-6xl mx-auto">
            <Navbar></Navbar>
            {/* we will use outlet. for all the dynamic things that we will add through different section*/}
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;