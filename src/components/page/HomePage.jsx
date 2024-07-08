
import React, { useEffect, useState } from 'react';
import ListCard from '../home/ListCard';
import { Link } from 'react-router-dom';
import Home from '../home/Home';
import First from '../home/first';
// import data from '../../data'
const HomePage = () => {
 
  return (
   
    <div className='bg-gradient-to-r from-purple-900 to-blue-900'>

      <div>
        <Home></Home>
      </div>
        <ListCard/>

        <First></First>
        {/* <Link to="/after">fdsf</Link> */}
    </div>
  )
}

export default HomePage
