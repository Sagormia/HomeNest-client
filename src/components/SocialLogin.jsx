import { useContext } from "react";
import { AuthContext } from "../context/auth/AuthContext";

const SocialLogin = () => {
    const {googleLogin} =  useContext(AuthContext);
    const handleLogin = () =>{
        googleLogin()
        .then(() => {})
        .catch(() => {})
    }
    return (
        <>
            <button onClick={handleLogin} type="button" className="w-full font-medium cursor-pointer text-center py-3 border flex space-x-2 items-center justify-center border-gray-200 rounded-md hover:bg-gray-200 transition duration-150">
                <img src="https://www.svgrepo.com/show/355037/google.svg" className="w-5 h-5" alt="" /> <span>Login with Google</span>
            </button>
        </>
    );
};

export default SocialLogin;