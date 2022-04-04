import { useContext } from "react";
import { AuthContect } from "../context/AuthProvider";

const useAuth = () => {
    return useContext(AuthContect);
}

export default useAuth;