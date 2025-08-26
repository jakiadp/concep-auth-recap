import React from 'react';
import { Outlet } from 'react-router';
import Navber from '../Component/Navber';
import Footer from '../Pages/Footer/Footer';

const RootLayout = () => {
    return (
        <div>
            <Navber></Navber>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default RootLayout;