import React from 'react'
import { NavLink } from 'react-router-dom';
import { FaHome } from "react-icons/fa"; 
import { IoSearchCircle } from "react-icons/io5";
import {FaUser} from "react-icons/fa";
import './Nav.scss';


const Nav = () => {
    return (
        <div className="nav">
            <NavLink to="./" activeClassName="is-active" exact={true} ><FaHome/></NavLink>
            <NavLink to="./discover" activeClassName="is-active" exact={true}><IoSearchCircle/></NavLink>
            <NavLink to="./detail" activeClassName="is-active" exact={true}><FaUser/></NavLink>
        </div>
    )
}

export default Nav;