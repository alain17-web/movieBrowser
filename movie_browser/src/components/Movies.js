import React,{useState,useEffect} from 'react';
import './Movies.scss';
import axios from 'axios';
import { Link } from 'react-router-dom';

const api_key="api_key=c573d649c7d159c69c75dfb1da627bcf";
const BASE_URL = "https://api.themoviedb.org/3/";
const url = "discover/movie?"
const page = "&page=1"


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
    },[])

    return (
        
        
        data.map(movie => {
            
            return(
                
               
                <div className="movies" key={movie.id}>
                    <Link to={"./detail/" + movie.id} exact>
                        <img src={"https://image.tmdb.org/t/p/w400" + movie.poster_path} alt={movie.title} key={movie.id} />
                    </Link>
                </div>
                
            )
            
         })
         
    )


    
}
 
export default Movies;