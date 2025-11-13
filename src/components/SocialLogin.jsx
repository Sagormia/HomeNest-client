import { useContext } from "react";
import { AuthContext } from "../context/auth/AuthContext";
import { useNavigate } from "react-router";

const SocialLogin = () => {
    const {googleLogin} =  useContext(AuthContext);
    const navigate = useNavigate();
    
    const handleLogin = () =>{
        googleLogin()
        .then(() => {
            navigate('/');
        })
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