import React from 'react';
import DetailImg from './detailImg.png';
import './Detail.scss';
import { FiClock } from "react-icons/fi";
import { AiOutlineStar } from "react-icons/ai";
import  Skywalker from './skywalker.png';
import  Force  from './force.png';
import  Half  from './half.png';
import { NavLink } from 'react-router-dom';
import { MdArrowBackIos } from "react-icons/md";



const Detail = () => {
    return ( 
        <div className="containerDetail">
            <div className="detailimg">
                <img src={DetailImg} alt="" />
                <NavLink to="./discover"  exact={true}><MdArrowBackIos></MdArrowBackIos></NavLink>
            </div>
            <div className="movieTitle">
                <h1>Star Wars: The Last Jedi</h1>
            </div>
            <div className="k">
                <p>4K</p>
            </div>
            <div className="info">
                <p><FiClock/> 152 minutes   <AiOutlineStar/> 7.0</p>
            </div>
            <div className="release">
                <h4>Release date</h4>
                <p>December 9.2017</p>
            </div>
            <div className="genre">
                <h4>Genre</h4>
                <div className="genres">
                    <p>Action</p>
                    <p>SciFi</p>
                </div>
            </div>
            <div className="synopsis">
                <h4>Synopsis</h4>
                <p>Rey (Daisy Ridley) finally manages to find the legendary Jedi knight, Luke Skywalker (Mark Hamill) on an island with a magical aura. The heroes of The Force Awakens including Leia, Finn <span>Read more.</span></p>
            </div>
            <div className="related">
                <h4>Related Movies</h4>
                <div className="images">
                    <figure>
                        <img src={Skywalker} alt="skywalker" />
                    </figure>
                    <figure>
                        <img src={Force} alt="force" />
                    </figure>
                    <figure>
                        <img src={Half} alt="half" />
                    </figure>
                </div>
            </div>


        </div>
     );
        
    
}
 
export default Detail;