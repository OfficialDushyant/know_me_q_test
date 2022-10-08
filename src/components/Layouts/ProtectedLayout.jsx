import React from 'react';

import { Navigate, Outlet } from "react-router-dom"

import { useTest } from "../../context/TestContext";

const ProtectedLayout = props => {
    const { login } = useTest();

    if(!login) {
        return <Navigate replace to="/" />
    }
    return (
        <Outlet />
    );
};

export default ProtectedLayout;