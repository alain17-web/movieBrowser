import React from 'react';
import './Movies.scss';
import Soul from './Soul.png';
import Knives from './Knives.png';
import Onward from './Onward.png';
import Mulan from './Mulan.png';
import Girl from './Girl.png';
import Cards from './Cards.png';

const Movies = () => {
    return ( 
        <div className="movies">
            <div className="soul">
                <img src={Soul} alt="soul" />
            </div>
            <div className="knives">
                <img src={Knives} alt="knives out" />
            </div>
            <div className="onward">
                <img src={Onward} alt="onward" />
            </div>
            <div className="mulan">
                <img src={Mulan} alt="mulan" />
            </div>
            <div className="girl">
                <img src={Girl} alt="girl" />
            </div>
            <div className="cards">
                <img src={Cards} alt="cards" />
            </div>
        </div>
     );
}
 
export default Movies;