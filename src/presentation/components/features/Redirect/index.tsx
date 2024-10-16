import { useAuth } from "@/presentation/contexts/AuthContext"
import { Navigate, Outlet } from "react-router-dom";

export const PrivateRoute = () => {
    const { currentUser } = useAuth();

    return currentUser ? <Outlet /> : <Navigate to='/login' />
}

export const LoginRedirect = () => {
    const { currentUser } = useAuth();

    return currentUser ? <Navigate to="/home" /> : <Outlet />
}
