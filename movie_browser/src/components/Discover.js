import React,{Fragment} from 'react';
import Title from './Title';
import SearchBar from './SearchBar';
import Categories from './Categories';
import Movies from './Movies';
import Nav from './Nav';


const Discover = () => {
    return(
        <Fragment>
            <Title/>
            <SearchBar/>
            <Categories/>
            <div className="moviesContainer">
                <Movies/>
            </div>
            <Nav/>
        </Fragment>
        
    )
}



export default Discover;