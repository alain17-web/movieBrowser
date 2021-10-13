import React from 'react'
import { Link } from 'react-router-dom';
import { FaHome } from "react-icons/fa"; 
import { IoSearchCircle } from "react-icons/io5";
import {FaUser} from "react-icons/fa";
import './Nav.scss';


const Nav = () => {
    return (
        <div className="nav">
            <Link to="./" className="home"><FaHome/></Link>
            <Link to="./discover" className="discover"><IoSearchCircle/></Link>
            <Link to="./detail" className="detail"><FaUser/></Link>
        </div>
    )
}

export default Nav;