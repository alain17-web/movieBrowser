import React,{useState,useEffect} from 'react';

import './Categories.scss';
import axios from 'axios';

const api_key="api_key=c573d649c7d159c69c75dfb1da627bcf";
const BASE_URL = "https://api.themoviedb.org/3/";
const url = 'genre/movie/list?'
const language = '&language=en-US'


const Categories = () => {

    const [data,setData] = useState([28]);
    
    async function getGenres(url){
        return await axios.get(BASE_URL + url + api_key + language)
    }

    useEffect(() => {
        async function fetchGenre(){
            const genresData = await getGenres(url)
            console.log(genresData)
            setData(genresData.data.genres)
        }
        fetchGenre()
    },[])

    

    return ( 
        <div className="categories">

        {data.map(genres => {
            return(
            
                <a href="#" key={genres.id}>{genres.name}</a>
            
            )
        })}
        </div>
    )
}
 
export default Categories;