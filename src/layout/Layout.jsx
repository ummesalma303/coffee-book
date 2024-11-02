import React from 'react';
import NavBar from '../component/NavBar';
import { Outlet } from 'react-router-dom';
import Footer from '../component/Footer';

const Layout = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Layout;