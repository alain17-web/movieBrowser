import React,{useEffect,useState} from 'react';
import './Detail.scss';
import { FiClock } from "react-icons/fi";
import { AiOutlineStar } from "react-icons/ai";
import { useParams,NavLink } from 'react-router-dom';
import { MdArrowBackIos } from "react-icons/md";
import axios from 'axios';
import Related from '../components/Related';
import { FaGenderless } from 'react-icons/fa';
import Movies from './Movies';

const api_key="api_key=c573d649c7d159c69c75dfb1da627bcf";
const BASE_URL = "https://api.themoviedb.org/3/";
const url = "movie/"




const Detail = () => {

    const {id} = useParams()

    const [data,setData] = useState([])

    async function getDetail(url){
        return await axios.get(BASE_URL + url + id + '?' + api_key)
    }

    

    useEffect(() => {
        async function fetchDetail(){
            const detailData = await getDetail(url)
            
            setData(detailData.data)
        }
        
        fetchDetail()
    },[])

    
              
            
        
   function Genre (){
    if(data.length !==0){
        return(
            data.genres.map(genre => {
                return (
                    <h5  key={genre.id}>{genre.name}</h5>
            )
        }))
    }else{
        return(
            <div>
                <p>loader</p>
            </div>
        )
    }
   }
    

    
    

    
    //const text = data.overview.substr(0,200) +  '\u2026'
        
    //console.log(data.overview.substr(0,150))
    
    
    return (
               
                    <div className="movie" key={data.id}>
                        <img src={"https://image.tmdb.org/t/p/w400" + data.poster_path} alt={data.title} />
                        <NavLink to="../discover" exact={true}><MdArrowBackIos/></NavLink>
                        <h1>{data.original_title}</h1>
                        <p><FiClock/> {data.runtime} minutes   <AiOutlineStar/> {data.vote_average}</p>
                        <div className="release">
                            <h4>Release date</h4>
                            <p>{data.release_date}</p>
                        </div>
                        <div className="genre">
                            <h4>Genre</h4>
                            <Genre/>
                            
                                    
                            
                            
                        </div>
                        <div className="synopsis">
                            <h4>Synopsis</h4>
                            <p>{data.overview} <span>Read more...</span></p>
                        </div>
                        <Related/>
                    </div>
                
                
                
            
    
    )

    
    
    
    
        
    
}
 
export default Detail;