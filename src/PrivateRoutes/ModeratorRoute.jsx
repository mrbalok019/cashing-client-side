import React, { useContext } from 'react';
import {Navigate} from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';
import UseAdmin from '../Hooks/UseAdmin';
import UseModerator from '../Hooks/UseModerator';

// eslint-disable-next-line react/prop-types

const ModeratorRoute = ({children}) => {
    const [isAdmin] = UseAdmin();
    const [isModerator]= UseModerator();
    if(isAdmin){
        return children;
    }
    
    if(isModerator){
        return children;
    }

    return <Navigate to='/dashboard' ></Navigate>
 
};

export default ModeratorRoute;