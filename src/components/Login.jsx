import React, { useState, useRef, useEffect } from 'react';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import Typed from "typed.js";
import '../textc.css'
const Login = () => {
  const [makan, setMakan] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const el = useRef(null);
  const typedInstance = useRef(null);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1 // Trigger when 10% of the element is visible
    };

    const handleIntersection = (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !typedInstance.current) {
          typedInstance.current = new Typed(el.current, {
            strings: ["tebakkk, makanan kesukaan aku apaa"], // Strings to display
            // Speed settings, try different values until you get good results
            startDelay: 300,
            typeSpeed: 70,
            backSpeed: 100,
            backDelay: 100,
            showCursor: false
          });
          observer.disconnect();
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, options);
    if (el.current) {
      observer.observe(el.current);
    }

    return () => {
      if (observer && el.current) {
        observer.unobserve(el.current);
      }
      if (typedInstance.current) {
        typedInstance.current.destroy();
      }
    };
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (makan === 'sate') {
      Swal.fire({
        icon: 'success',
        title: 'yeeeyy benerr',
        text: 'mari kita pindahhh halamann',
        timerProgressBar: true,
        timer: 2000, // Menampilkan sweet alert selama 2 detik
        showConfirmButton: false,
        customClass: {
          popup: 'bg-white', // Warna latar belakang popup
        },
      }).then(() => {
        navigate('/door');
      });
    } else {
      Swal.fire({
        icon: 'error',
        title: 'ihhhhh salahhhh',
        text: 'masa gatau siii huuuuuuu, clue nya dibakar dan ditusuk',
      });
    }
  };

  return (
    <div className='flex justify-center items-center h-screen'>
      <div className="w-screen h-screen bg-black text-white flex flex-col justify-center items-center py-3">
        <h2 className=''></h2>
        <span ref={el} className='text-3xl text-gud text-center'></span>
        <form onSubmit={handleSubmit} className="w-4/5 max-w-lg">
          <div className="form-group flex items-center">
            <input
              className='border-b-4 bg-transparent text-white placeholder-gray-300 focus:outline-none w-full py-2 mb-4'
              type="text"
              value={makan}
              onChange={(e) => setMakan(e.target.value)}
              placeholder="isi disini"
              required
            />
            <button type="submit" className=''>
              <img src="image/icon/move.svg" alt="" />
            </button>
          </div>
          {error && <p className="error">{error}</p>}
        </form>
      </div>
    </div>
  );
}

export default Login;
