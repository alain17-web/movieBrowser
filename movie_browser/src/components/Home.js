import React,{Fragment} from 'react'
import Title from './Title';
import HomeImage from './HomeImage';
import Trending from './Trending';
import Nav from './Nav';


const Home = () => {
  return (
    <Fragment>
        <Title/>
        <HomeImage/>
        <Trending/>
        <Nav/>
  </Fragment>
  )
}

export default Home;