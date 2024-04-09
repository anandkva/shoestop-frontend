import { Outlet, Navigate } from 'react-router-dom'

const PrivateRoutes = () => {
    const hasToken = !!localStorage.getItem("token");
    return(
        hasToken ? <Outlet/> : <Navigate to="/login"/>
    )
}

export default PrivateRoutes