import React,{useEffect,useState} from 'react'
import trending from './trending.png';
import './Trending.scss';
import axios from 'axios';


const api_key="c573d649c7d159c69c75dfb1da627bcf";
const BASE_URL = "https://api.themoviedb.org/3/";



const Trending = () => {

    const [data,setData] = useState([]);
    const api = axios.create({baseURL: BASE_URL});
    const getTrending = api.get("trending/movie/day?",{params:{api_key}});
    const getImage = (path)=> `https://image.tmdb.org/t/p/w500/${path}`; 

    /*useEffect(() => {
         getTrending.then(response => {
           setData(response.data.results);
           
      });
       
    });*/
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
                        </div>
                    
                </div>
            </div>
        </div>
        
    )
}

export default Trending;