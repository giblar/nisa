import React from 'react';
import { useToggle } from '../ToggleContext';
import Chatin from './Chatin';

const Detail = () => {
  const { isOpen, toggleShape } = useToggle();

  return (
    <div className='flex flex-col h-screen'>
      <div className='w-full bg-[#F8F8F8] flex justify-between px-2 py-3'>
        <div className='flex'>
          <button onClick={toggleShape}><img src="/image/icon/back.svg" className='w-8' alt="" /></button>
          <div className='flex ml-5 justify-center items-center gap-3'>
            <img src="/image/char/nezuko.jpeg" className='w-10 h-10 aspect-square object-cover rounded-full' alt="" />
            <h1 className='text-xl'>yatim</h1>
          </div>
        </div>
        <div className='flex justify-center items-center gap-6 mr-3'>
          <img src="image/icon/video.svg" alt="" className='w-8 h-8' />
          <img src="image/icon/call.svg" alt="" className='w-8 h-8' />
        </div>
      </div>

      <div className='flex-grow overflow-y-auto h-full'>
        <Chatin
          textt="kerennnnn klik link dibawah yaa"
          posi=""
          backC="bg-gray-200"
          linkNya="/click"
          textNya="https://ninjago.com"
        />
        <Chatin
          textt="mari kita ke halaman selanjutnyaa"
          posi="float-right"
        />
        
      </div>

      <div className='w-full bg-gray-200 p-3 flex '>
       <img src="/image/icon/plus.png" alt="" className='w-10 h-10'/>
        <input type="text" className='bg-white rounded-2xl w-full my-1 outline-gray-300' />
        <button> <img src="image/icon/send.svg" className='w-10 h-10' alt="" /> </button>
      </div>
    </div>
  );
}

export default Detail;
