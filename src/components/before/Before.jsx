import React, { useState, useEffect, useRef } from 'react';
import Typed from 'typed.js';  
import dataCard from '../../dataCard';
import { useNavigate } from 'react-router-dom'; 
import '../../textc.css';

const Before = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(false);  // State untuk loading
  const navigate = useNavigate(); 
  const typedRef = useRef(null); 
  const [isBounc, setBounc] = useState(false);
  const akhir = 21;
  const toggleShape = () => {
    setBounc(!isBounc);
  };
    
  useEffect(() => {
   
    const options = {
      strings: [dataCard[currentIndex].kata],
      typeSpeed: 50,  
      showCursor: false,  
    };
    
    typedRef.current = new Typed('#typed-text', options);

    return () => {
      if (typedRef.current) {
        typedRef.current.destroy();
      }
    };
  }, [currentIndex]);

  const handleNext = () => {
    if (currentIndex < dataCard.length - 1) {
      setCurrentIndex(prevIndex => prevIndex + 1);
    }

    //total id dikurang 1
    if (currentIndex === akhir) {
      setBounc(!isBounc);
    }
  };

  if (isLoading) {
    return (
      <div className="flex justify-center flex-col items-center h-screen ">
        <img src="/image/loading.jpeg" alt="" className='w-1/2 rounded-full animate-spin' />
        <h1 className='text-2xl text-red-700 '>sabar boss loading dulu......</h1>
      </div>
    );
  }

  return (
    <div className="flex justify-center mt-10  ">
      <div className="w-full max-w-sm flex flex-col justify-center items-center border h-auto px-4 py-4 backdrop-blur-sm bg-white/30">
        <div className='w-full bg-black rounded-md py-2 px-3 text-xl text-white'>
          <p id="typed-text" className='text-pixell font-xs'></p>
        </div>
       <div className='flex'>
       <button onClick={toggleShape} className="">
          <img src={`${currentIndex === akhir ? 'image/giblarWaving.png' :'/image/giblar.png'} `} alt="" className={`z-[-10] ${isBounc ? 'animate-bounce' : 'rounded-none'}`} />
        </button>
        <button className={`bg-black h-10 text-white rounded-md px-4 py-2 mt-4 ${currentIndex === akhir ? 'hidden' : ' '}`} onClick={handleNext}>
          Next
        </button>
        <img src="image/cry.gif" className={`${currentIndex === akhir? '' : 'hidden'}`} alt="" />
       </div>
      </div>
    </div>
  );
};

export default Before;
