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
            <Movies/>
            <Nav/>
        </Fragment>
        
    )
}



export default Discover;