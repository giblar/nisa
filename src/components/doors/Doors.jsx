import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Doors = () => {
  const [doors, setDoors] = useState([
    { id: 1, isVisible: true, isFading: false },
    { id: 2, isVisible: true, isFading: false },
    { id: 3, isVisible: true, isFading: false },
    { id: 4, isVisible: true, isFading: false },
    { id: 5, isVisible: true, isFading: false },
    { id: 6, isVisible: true, isFading: false },
    { id: 7, isVisible: true, isFading: false },
    { id: 8, isVisible: true, isFading: false },
    { id: 9, isVisible: true, isFading: false },
    { id: 10, isVisible: true, isFading: false },
    { id: 11, isVisible: true, isFading: false },
    { id: 12, isVisible: true, isFading: false },
    { id: 13, isVisible: true, isFading: false },
    { id: 14, isVisible: true, isFading: false },
    { id: 15, isVisible: true, isFading: false },
    { id: 17, isVisible: true, isFading: false },
    { id: 18, isVisible: true, isFading: false },
    { id: 19, isVisible: true, isFading: false },
    { id: 20, isVisible: true, isFading: false },
    { id: 21, isVisible: true, isFading: false },
    { id: 22, isVisible: true, isFading: false },
    { id: 23, isVisible: true, isFading: false },
    { id: 24, isVisible: true, isFading: false },
    { id: 25, isVisible: true, isFading: false },
    { id: 26, isVisible: true, isFading: false },
    { id: 27, isVisible: true, isFading: false },
    { id: 28, isVisible: true, isFading: false },
    { id: 29, isVisible: true, isFading: false },
    { id: 30, isVisible: true, isFading: false },
    { id: 31, isVisible: true, isFading: false },
    { id: 32, isVisible: true, isFading: false },
    { id: 33, isVisible: true, isFading: false },
    { id: 34, isVisible: true, isFading: false },
    { id: 35, isVisible: true, isFading: false },
    { id: 36, isVisible: true, isFading: false },
    { id: 37, isVisible: true, isFading: false },
    { id: 38, isVisible: true, isFading: false },
    { id: 39, isVisible: true, isFading: false },
    { id: 40, isVisible: true, isFading: false },
  ]);

  const handleImageClick = (id) => {
    setDoors((prevDoors) =>
      prevDoors.map((door) =>
        door.id === id ? { ...door, isFading: true } : door
      )
    );

    setTimeout(() => {
      setDoors((prevDoors) =>
        prevDoors.map((door) =>
          door.id === id ? { ...door, isVisible: false } : door
        )
      );
    }, 1000); 
  };

  return (
    <div className='flex  justify-center'>
      <div className=''>
      
      <div className='grid grid-cols-1 gap-4 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-4 sm:grid-cols-2'>
        {doors.map((door) => (
          <div key={door.id} className='relative  w-[300px] h-[400px] rounded-lg overflow-hidden z-50'>
            {door.isVisible && (
              <img
                src="/image/door.png"
                alt={`Door ${door.id}`}
                onClick={() => handleImageClick(door.id)}
                className={`cursor-pointer transition-opacity duration-1000 ${door.isFading ? 'opacity-0 animate-spin' : 'opacity-100'}`}
              />
            )}
            {door.id === 21 && (
              <Link to="/home" className='absolute text-white bg-purple-500 p-2 top-10 left-[100px] z-[-10] px-4 rounded-md py-2'>pindah</Link>
            )}
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default Doors;
