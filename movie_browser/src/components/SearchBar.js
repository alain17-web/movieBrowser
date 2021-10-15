import React from 'react';
import {FiSearch} from 'react-icons/fi';
import './SearchBar.scss';


const SearchBar = () => {
    return ( 
        <div className="search">
            <form action="/detail" method="post">
                <button type="submit" className="searchButton"><FiSearch/></button>
                <input type="text" placeholder="Sherlock Holmes" name="search"/>
            </form>
        </div>
     );
}
 
export default SearchBar;