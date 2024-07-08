import React from 'react';

const Chat = (props) => {
    const { name, inside, Cou, time, imag } = props;
    return (
        <div className='flex w-full items-center cursor-pointer'>
            <img src={`image/char/${imag}`} alt="" className='aspect-square object-cover rounded-full w-12 h-12' />
            <div className='flex justify-between border-b  px-2 py-2 w-full'>
                <div className='flex items-center'>
                    <div className='ml-3'>
                        <p>{name}</p>
                        <p className='font-thin text-gray-700'>{inside}</p>
                    </div>
                </div>
                <div className='flex flex-col items-end justify-between'>
                    <p>{time} PM</p>
                    <span className='flex items-center justify-center h-4 w-4 text-xs bg-blue-600 rounded-full text-white'>{Cou}</span>
                </div>
            </div>

            
            
        </div>
    );
}

export default Chat;
