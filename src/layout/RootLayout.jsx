import { Outlet } from "react-router";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { ToastContainer } from 'react-toastify';

const RootLayout = () => {
    return (
        <>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
            <ToastContainer />
        </>
    );
};

export default RootLayout;