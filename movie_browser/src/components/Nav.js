import React from 'react'
import { FaHome } from "react-icons/fa"; 
import { IoSearchCircle } from "react-icons/io5";
import {FaUser} from "react-icons/fa";
import './Nav.scss';


const Nav = () => {
    return (
        <div className="nav">
            <a href="./" className="home"><FaHome/></a>
            <a href="./discover" className="discover"><IoSearchCircle/></a>
            <a href="./detail" className="detail"><FaUser/></a>
        </div>
    )
}

export default Nav;