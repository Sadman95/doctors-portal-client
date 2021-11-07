import React from 'react';
import { Redirect, Route } from 'react-router';
import useAuth from '../../hooks/useAuth';
import Preloader from '../Preloader/Preloader';

const PrivateRoute = ({children, ...rest}) => {
    const {user, loading} = useAuth();

    if(loading){
        return <Preloader></Preloader>
    }

    return (
        <Route
        {...rest}
        render = { ({location}) =>
            user.email ?
            children
            :
            <Redirect
                to = {
                    {
                        pathname: '/register',
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

export default PrivateRoute;