import { Link } from "react-router";
import errorImg from "../assets/error.png"
const ErrorPage = () => {
    return (
        <>
            <div className="container text-center py-5 min-h-screen flex-center flex-col">
                <img src={errorImg} className="w-full max-w-[20rem] mx-auto" alt="" />
                <h1 className="text-4xl lg:text-5xl font-semibold mt-6">Oops! Page Not Found</h1>
                <p className="mt-3 text-xl">The page you are looking for is not available.</p>
                <Link to="/" className="button py-2! px-6! mt-6">Go Back!</Link>
            </div>
        </>
    );
};

export default ErrorPage;