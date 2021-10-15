import React from 'react';
import DetailImg from './detailImg.png';
import './MovieDetail.scss';
import { FiClock } from "react-icons/fi";
import { AiOutlineStar } from "react-icons/ai";

const MovieDetail = () => {
    return ( 
        <div className="containerDetail">
            <div className="detailimg">
                <img src={DetailImg} alt="" />
            </div>
            <div className="movieTitle">
                <h1>Star Wars: The Last Jedi</h1>
            </div>
            <div className="k">
                <p>4K</p>
            </div>
            <div className="info">
                <p><FiClock/> 152 minutes   <AiOutlineStar/> 7.0 (MDb)</p>
            </div>
            <div className="release">
                <h4>Release date</h4>
                <p>December 9.2017</p>
            </div>
            <div className="genre">
                <h4>Genre</h4>
            </div>
        </div>
     );
}
 
export default MovieDetail;