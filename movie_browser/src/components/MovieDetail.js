import React from 'react';
import DetailImg from './detailImg.png';
import './MovieDetail.scss';

const MovieDetail = () => {
    return ( 
        <div className="detailimg">
            <img src={DetailImg} alt="" />
        </div>
     );
}
 
export default MovieDetail;