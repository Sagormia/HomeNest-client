import { useContext } from "react";
import { AuthContext } from "../context/auth/AuthContext";
import { Navigate } from "react-router";
import Loader from "../components/Loader";

const PrivateRoutes = ({children}) => {
    const {user, loader} = useContext(AuthContext);
    if(loader){
        return <Loader></Loader>
    }
    if(!user){
        return <Navigate to={'/login'}></Navigate>
    }
    return children;
};

export default PrivateRoutes;