import React,{useEffect,useState} from 'react';

import './HomeImage.scss';
import axios from 'axios';
const getImage = (path)=> `https://image.tmdb.org/t/p/w500/${path}`;

const api_key="c573d649c7d159c69c75dfb1da627bcf";
const BASE_URL = "https://api.themoviedb.org/3/";

const HomeImage = () => {

    const [data,setData] = useState([]);
    const api = axios.create({baseURL: BASE_URL});
    const getUpcoming = api.get("movie/upcoming",{params:{api_key}});

    
     

    useEffect(() => {
      getUpcoming.then(response => {
          setData(response.data.results);
          
      },[]);
       
    });

    return (
        <div>
        {data.map((movie) => {
            return(
            <div className="container" key={movie.id}>
                <img src={getImage(movie.poster_path)} alt="HomeImg" />
            </div>
            )}
        )}
        </div>
    )
    
}
export default HomeImage;

