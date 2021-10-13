import React from 'react';
import HomeImg from './homeImage.png';
import './HomeImage.scss';


const HomeImage = () => {
    return (
        <div className="container">
            <img src={HomeImg} alt="HomeImg" />
        </div>
    )
}

export default HomeImage;

