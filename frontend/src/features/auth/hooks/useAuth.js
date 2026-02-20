import { AuthContext } from "../context/auth.context.jsx";
import { useContext } from "react";


export const useAuth = () => {
    const context = useContext(AuthContext);

    return context;
}