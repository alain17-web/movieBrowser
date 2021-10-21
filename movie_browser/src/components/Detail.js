import React,{useEffect,useState} from 'react';
/*import DetailImg from './detailImg.png';*/
import './Detail.scss';
import { FiClock } from "react-icons/fi";
import { AiOutlineStar } from "react-icons/ai";
/*import  Skywalker from './skywalker.png';
import  Force  from './force.png';
import  Half  from './half.png';*/
import { useParams,NavLink } from 'react-router-dom';
import { MdArrowBackIos } from "react-icons/md";
import axios from 'axios';

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
            console.log(detailData)
            setData(detailData.data)
        }
        
        fetchDetail()
    },[])

    

    
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
                    </div>
                
                
             
            
    
    )

    
    
    
    
        
    
}
 
export default Detail;