import React, { useState } from 'react';
import { Outlet, Navigate } from 'react-router-dom';

export const AdminAuth = () => {
    const AuthCheck = localStorage.getItem('isLoggedIn') === 'true'
    const AdminCheck = localStorage.getItem('isAdmin') === 'true'

    return (
        AuthCheck && AdminCheck ? <Outlet/> : <Navigate to='/Admin/Login' replace/>
    )
};