import React,{useState,useEffect} from 'react';
import './Movies.scss';
/*import Soul from './Soul.png';
import Knives from './Knives.png';
import Onward from './Onward.png';
import Mulan from './Mulan.png';
import Girl from './Girl.png';
import Cards from './Cards.png';*/
import axios from 'axios';
import { NavLink } from 'react-router-dom';

const api_key="api_key=c573d649c7d159c69c75dfb1da627bcf";
const BASE_URL = "https://api.themoviedb.org/3/";
const url = "discover/movie?"
const page = "&page=1"
const getImage = (path)=> `https://image.tmdb.org/t/p/w500/${path}`;

const Movies = () => {

    const [data,setData] = useState([])

    async function getMovies(url){
        return await axios.get(BASE_URL + url + api_key + page)
    }

    useEffect(() => {
        async function fetchMovie(){
            const genresData = await getMovies(url)
            setData(genresData.data.results)
        }
        fetchMovie()
    })

    return (
        
        
        data.map(movie => {
            return(
            
                <div className="movies">
                    <NavLink to="./detail?movie.id" exact={true}><img src={"https://image.tmdb.org/t/p/w400" + movie.poster_path} alt={movie.title} key={movie.id} /></NavLink>
                </div>
                
            )
            
         })
         
    )


    /*return ( 
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
     );*/
}
 
export default Movies;