import React, { useState } from 'react';
import { Outlet, Navigate } from 'react-router-dom';

export const UserAuth = () => {
    const AuthCheck = localStorage.getItem('isLoggedIn') === 'true'
    const UserCheck = localStorage.getItem('isUser') === 'true'

    return (
        AuthCheck && UserCheck ? <Outlet/> : <Navigate to='/login' replace/>
    )
};