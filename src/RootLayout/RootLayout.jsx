import React from 'react';
import { Outlet } from 'react-router';
import Navber from '../Component/Navber';

const RootLayout = () => {
    return (
        <div>
            <Navber></Navber>
            <Outlet></Outlet>
        </div>
    );
};

export default RootLayout;