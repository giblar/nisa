import React from 'react';
import { useToggle } from '../ToggleContext';

const Bottom = () => {
  const { isOpen, isTransitioning } = useToggle();

  return (
    <div className={`flex justify-between items-center  border-gray-200 border-t px-3 py-2 transition-opacity duration-300 ${isOpen && !isTransitioning ? 'hidden opacity-0' : 'opacity-100'}`}>
       <div className='flex flex-col items-center'>
        <img src="/image/icon/update.svg" alt="" className='w-[40px]' />
        <p className='text-sm text-gray-600'>Updates</p>
      </div>
      <div className='flex flex-col items-center'>
        <img src="/image/icon/call.svg" alt="" className='w-[40px]' />
        <p className='text-sm text-gray-600'>Call</p>
      </div>
      <div className='flex flex-col items-center'>
        <img src="/image/icon/users.svg" alt="" className='w-[40px]' />
        <p className='text-sm text-gray-600'>Comunity</p>
      </div>
      <div className='flex flex-col items-center'>
        <img src="/image/icon/chat.svg" alt="" className='w-[35px]' />
        <p className='text-sm text-gray-600'>Chats</p>
      </div>
      
      <div className='flex flex-col items-center'>
        <img src="/image/icon/setting.svg" alt="" className='w-[40px]' />
        <p className='text-sm text-gray-600'>Settings</p>
      </div>
     
      
    </div>
  );
}

export default Bottom;
