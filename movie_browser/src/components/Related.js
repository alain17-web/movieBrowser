import React,{useEffect,useState} from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom';
import './Related.scss'
import Carousel from 'react-elastic-carousel'



const api_key="api_key=c573d649c7d159c69c75dfb1da627bcf";
const BASE_URL = "https://api.themoviedb.org/3/";
const url = "movie/"
const page = "&page=1"

const Related = () => {

    const {id} = useParams()

    const [data,setData] = useState([])

    async function getSimilar(url){
        return await axios.get(BASE_URL + url + id + '/similar?' + api_key + page)
    }

    useEffect(() => {
        async function fetchSimilar(){
            const similarData = await getSimilar(url)
            setData(similarData.data.results)
            
        }
        fetchSimilar()
    },[])

   

    
    
    return ( 
        

        <div className="related">
            <h4>Related movies</h4>
            <Carousel
                showArrows={false}
                enableAutoPlay={true}
                autoPlaySpeed={3000}>
            
            {data.map(movie =>{
            
           
                return (
                    
                    
                    <div className="images" key={movie.id}>
                        
                        <img src={"https://image.tmdb.org/t/p/w400" + movie.poster_path} alt={movie.title}/>
                        <p className="smallTitle">{movie.title}</p>
                        
                    </div>

                   
                )
            })}
            </Carousel>
        </div>
    )
    
}
 
export default Related;

