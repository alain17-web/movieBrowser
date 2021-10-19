import React,{useState,useEffect} from 'react';
import './Categories.scss';
import axios from 'axios';

const api_key="api_key=c573d649c7d159c69c75dfb1da627bcf";
const BASE_URL = "https://api.themoviedb.org/3/";
const url = 'discover/movie?'
//const page = `&page=${page}&with_genres=`
/*const getImage = (path)=> `https://image.tmdb.org/t/p/w500/${path}`;*/

const Categories = () => {

    //const [page,setPage] = useState([1]);
    

    return ( 
        <div className="categories">
            
            <a href="#">Fantasy</a>
            <a href="#">Horror</a>
            <a href="#">ScienceFiction</a>
            <a href="#">Documentaries</a>
        </div>
     );
}
 
export default Categories;