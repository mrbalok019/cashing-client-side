import React, { useContext } from 'react';
import {Navigate} from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';
import UseAdmin from '../Hooks/UseAdmin';

// eslint-disable-next-line react/prop-types
const AdminRoute = ({children}) => {
      
    const [isAdmin] = UseAdmin();
    if(isAdmin){
        return children;
    }

    return <Navigate to='/dashboard' ></Navigate>
};

export default AdminRoute;