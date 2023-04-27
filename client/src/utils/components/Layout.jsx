import React from "react";
import {Outlet} from "react-router-dom";
import Sidebar from "./Sidebar/Sidebar";

import "./Layout.css"

const Layout = () => {
    return (
        <>
            <div className="container">
                <Sidebar />
                <Outlet />
            </div>
        </>
    );
};

export default Layout;
