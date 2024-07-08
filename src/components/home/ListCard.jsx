import React, { useEffect, useState } from 'react';
import data2 from '../../data2';

import '../../textc.css'
import Aos from 'aos';
import 'aos/dist/aos.css';
import '../../textc.css'
const ListCard = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        setUsers(data2);
    }, []);

    useEffect(()=>{
        Aos.init();
      },[])
    return (
        <div className="flex flex-col justify-center items-center  pb-10">
           
          <h1 className='text-7xl text-white text-gud h-screen text-center'>ohiya aku udah ngumpulin orang yang ngucapin hbd ke kamu</h1>
                <div className='grid grid-cols-1 gap-y-[10rem]'>
                   
                {users.map(user => (
                    <div  data-aos="flip-up"  data-aos-offset="300"  data-aos-duration="1000" key={user.id} className="flex justify-center bg-white bg-opacity-10 text-slate-200" >
                        <div className="w-full max-w-sm flex flex-col justify-center items-center border h-auto px-4 py-4">
                            <img src={user.image} alt={user.name}  data-aos="flip-left" data-aos-offset="300"  data-aos-duration="1000" className="w-1/2 aspect-square object-cover mb-4" loading='lazy' />
                            <div className="text-4xl mb-2 name" >{user.name}</div>
                            <p className="text-center say text-lg">"{user.say}"</p>
                        </div>
                    </div>
                ))}
                </div>
            
        </div>
    );
};

export default ListCard;
