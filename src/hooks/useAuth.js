// Packages
import { useContext } from "react";

// Files
import { AuthContext } from "../context/AuthProvider";

// Codes
export function useAuth(){
    return useContext(AuthContext)
}