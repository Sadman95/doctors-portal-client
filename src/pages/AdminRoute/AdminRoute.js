import React from 'react';
import { Redirect, Route } from 'react-router';
import useAuth from '../../hooks/useAuth';
import Preloader from '../Preloader/Preloader';

const AdminRoute = ({children, ...rest}) => {
    const {user, loading, admin} = useAuth();

    if(loading){
        return <Preloader></Preloader>
    }

    return (
        <Route
        {...rest}
        render = { ({location}) =>
            user.email && admin?
            children
            :
            <Redirect
                to = {
                    {
                        pathname: '/',
                        state: {from : location}
                    }
                }
            >

            </Redirect>
        }
        >

        </Route>
    );
};

export default AdminRoute;