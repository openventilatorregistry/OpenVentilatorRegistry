import React from 'react';
import {Navbar, NavbarBrand} from "reactstrap";

export default function Header (){
    const brandStyle = {
        color:"white",
    };
    return(
    <Navbar color="danger">
        <NavbarBrand style={brandStyle}>
            OPEN VENTILATOR REGISTRY
        </NavbarBrand>
    </Navbar>
)}