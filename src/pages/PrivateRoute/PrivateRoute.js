import React from 'react';
import useAuth from '../../hooks/useAuth';
import Preloader from '../Preloader/Preloader';
import {Navigate, useLocation} from 'react-router-dom'

const PrivateRoute = ({children}) => {
    const {user, loading} = useAuth();
    const location = useLocation()

    if(loading){
        return <Preloader></Preloader>
    }

    if(user.email){
        return children;
    }
    return <Navigate to="/login" state={{ from: location }} />;
};

export default PrivateRoute;