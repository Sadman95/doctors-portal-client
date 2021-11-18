import React from 'react';
import { Navigate, useLocation } from 'react-router';
import useAuth from '../../hooks/useAuth';
import Preloader from '../Preloader/Preloader';

const AdminRoute = ({children}) => {
    const {user, loading, admin} = useAuth();
    const location = useLocation();

    if(loading){
        return <Preloader></Preloader>
    }

    if(user.email && admin){
        return children;
    }
    return <Navigate to="/login" state={{ from: location }} />;
};

export default AdminRoute;