import React from 'react'
import trending from './trending.png';
import './Trending.scss';


const Trending = () => {
    return (
        <div className="container1">
            <div className="trending">
                <h1>Trending</h1>
            </div>
            <div className="carousel">
            <div className="container2">
                <div className="photobanner">
                    <img src={trending} alt="trending" />

                    <img src={trending} alt="trending" />

                    <img src={trending} alt="trending" />

                    <img src={trending} alt="trending" />
                </div>
            </div>
            </div>
        </div>
        
    )
}

export default Trending;