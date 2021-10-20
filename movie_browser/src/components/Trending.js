import React,{useEffect,useState} from 'react'
import './Trending.scss';
import axios from 'axios';
import Carousel from 'react-elastic-carousel';



const api_key="api_key=c573d649c7d159c69c75dfb1da627bcf";
const BASE_URL = "https://api.themoviedb.org/3/";
const page = '&page=1';
const url = 'trending/movie/day?'


const Trending = (props) => {

    const [data,setData] = useState([]);

    

    async function getTrending(url){
        return await axios.get(BASE_URL + url + api_key + page)
    }

    useEffect(() => {
        async function fetchMovie(){
         const moviesData = await getTrending(url)
        setData(moviesData.data.results)
        }
        fetchMovie()
    },[])

    function SlideShow(){
        
        return data.map(movie => {
            return <img src={"https://image.tmdb.org/t/p/w400" + movie.poster_path} alt={movie.title} key={movie.id}/>
        })
    }

    return (
        <div className="container1">
            <div className="trending">
                <h1>Trending</h1>
            </div>
            <div className="slideShow">
                <Carousel
                    preventDefaultTouchmoveEvent={true}
                    children={SlideShow()}
                    pagination={false}
                    showArrows={false}
                    enableAutoPlay={true}
                    autoPlaySpeed={3000}
                />
            </div>
        </div>
    )


    
}

export default Trending;