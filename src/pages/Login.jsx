import { Link, useNavigate } from "react-router";
import SocialLogin from "../components/SocialLogin";
import { toast } from "react-toastify";
import { useContext } from "react";
import { AuthContext } from "../context/auth/AuthContext";
import Loader from "../components/Loader";

const Login = () => {
    const {userLogin, user, loader} = useContext(AuthContext);
    const navigate = useNavigate();

    if(loader){
        return <Loader></Loader>
    }

    if(user){
        navigate("/");
    }

    const handleLogin = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        userLogin(email, password)
        .then(() => {
            toast("Login Successfull")
        })
        .catch((err) => {
            toast(err);
            console.log(err);
        })
    }
    return (
        <>
            <title>Login</title>
            <div className="container">
                <div className="max-w-lg mx-auto my-12 md:my-16 lg:my-20 bg-base-100 p-6 sm:p-8 rounded-xl border border-gray-200 shadow-lg shadow-gray-200">
                    <h1 className="text-3xl font-bold text-base-300">Login</h1>
                    <p className="text-base-200 mt-2">Hi, Welcome back 👋</p>
                    <form action="#" className="mt-6" onSubmit={handleLogin}>
                        <div className="flex flex-col space-y-4.5">
                            <label>
                                <p className="font-medium pb-2">Email address</p>
                                <input id="email" name="email" type="email" className="w-full py-3 border border-gray-200 rounded-md px-4 focus:outline-none focus:border-base-200 hover:shadow" placeholder="Enter email address" />
                            </label>
                            <label>
                                <p className="font-medium pb-2">Password</p>
                                <input id="password" name="password" type="password" className="w-full py-3 border border-gray-200 rounded-md px-4 focus:outline-none focus:border-base-200 hover:shadow" placeholder="Enter your password" />
                            </label>
                            <button className="button py-2.75!">
                                <span>Login</span>
                            </button>

                            <div className="flex items-center text-sm">
                                <span className="flex-1 h-px bg-gray-200"></span>
                                <span className="mx-4">OR</span>
                                <span className="flex-1 h-px bg-gray-200"></span>
                            </div>

                            <SocialLogin></SocialLogin>

                            <p className="text-center">Don't have an account? <Link to="/register" className="text-primary font-medium inline-flex space-x-1 items-center hover:text-secondary"><span>Register</span></Link></p>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default Login;