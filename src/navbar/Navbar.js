import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"

export default function NavBar() {

    return (

        <nav>

            <ul>
                <li>
                    <Link to="/home">Home</Link>
                </li>
                <li>
                    <Link to="/houses">Houses</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/contact">Contact</Link>
                </li>
            </ul>
        </nav>
    )
}

/*
    Pàgines:
    - home
    - houses
    - about
    - contact

*/ 