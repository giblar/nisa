import React from 'react';
import { useToggle } from '../ToggleContext';
import Chat from './Chat';
import Detail from './Detail';
import Chatin from './Chatin';

const Wa = () => {
  const { isOpen, toggleShape } = useToggle();
 
  return (
   <div className='h-screen'>
     <div className={`flex flex-col h-full ${isOpen ? 'bg-[url("/image/icon/walpaper.jpg")]' : ''}`}>
      <div className={isOpen ? '' : 'hidden'}>
        <Detail />
       
      </div>
      <div className={`flex justify-between w-full text-blue-500  px-2 py-2  border-gray-200 ${isOpen ? 'hidden' : ''}`}>
       <div>
        <div className='bg-gray-200 aspect-square flex justify-center items-center h-10 w-10 rounded-full'>
          <img src="image/icon/more.svg" className='w-7 h-7 ' alt="" />
        </div>
       <h1 className='text-black font-bold text-3xl'>Chats</h1>
       </div>
        
         <div className='flex gap-2'>
         <div className='flex justify-center items-center bg-gray-200 h-10 w-10 rounded-full'>
          <img src="image/icon/camera.svg" className='w-7 h-7 ' alt="" />
         </div>
         <div className='flex justify-center items-center bg-green-600 h-10 w-10 rounded-full'>
          <img src="image/icon/plusB.svg" className='w-7 h-7 ' alt="" />
         </div>

        
         </div>
      </div>
      <div className={`flex  text-blue-500 border-b border-gray-200 px-2 py-2 ${isOpen ? 'hidden' : ''}`}>
        <img src="image/icon/arcive.svg" alt="" />
        
      </div>
      <div className={`overflow-y-auto flex-1 transition-opacity duration-400 ${isOpen ? 'hidden' : ''}`}>
       
        <Chat name="mang utom"
              imag="BaekHyunWoo.jpeg"
              inside="bejaken ka bapak kompaan dimana"
              Cou="2"
              time="23.52"
        />
        <Chat name="ruslan"
              imag="levi.jpeg"
              inside="besok ada tugas kah"
              Cou="4"
              time="01.33"
        />
        <Chat name="bu ririn parfum"
              imag="nurharyati.jpg"
              inside="hati hati yach"
              Cou="5"
              time="08.41"
        />
        <Chat name="kang galon"
              imag="komeng.jpeg"
              inside="galon na ges diharep"
              Cou="1"
              time="02.24"
        />
         <div onClick={toggleShape} className='cursor-pointer'>
          <Chat 
          name="yatim"
          imag="nezuko.jpeg"
          inside="moal baleg"
          Cou="1"
          time="07.09"/>
        </div>
        <Chat name="udin"
              imag="ryuSun.jpeg"
              inside="ngusep moal"
              Cou="1"
              time="14.55"
        /> <Chat name="teh eneng"
                  imag="imSol.jpeg"
                  inside="meli catokan dimana"
                  Cou="1"
                  time="11.12"
  />
      </div>
    </div>
   </div>
  );
}

export default Wa;
