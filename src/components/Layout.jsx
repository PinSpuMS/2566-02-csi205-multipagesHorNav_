import React from "react";
import { Outlet } from "react-router";
import { Link } from "react-router-dom";
import { Navbar } from "./Navbar";

const Header = () => {
    return <h1>HEADER</h1>
}

const Footer = () => {
    return <h1>FOOTER</h1>
}

export const Layout = () => {
    return (
        <div>
            <Header />
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    )
}