import { Navigate, Outlet } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
    const token = localStorage.getItem('tokens');

    return token ? (
        <Outlet />
    ) : (
        <Navigate to="/login" replace />
    );
};

export default PrivateRoute;
