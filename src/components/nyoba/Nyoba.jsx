import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const Nyoba = () => {
  const [count, setCount] = useState(12);
  const [countdu, setCountdu] = useState(20);
  const [countti, setCountti] = useState(90);
  const [countem, setCountem] = useState(31);
  const [isMatched, setIsMatched] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (count === 12 && countdu === 20 && countti === 90 && countem === 30) {
      setIsMatched(true);
      setTimeout(() => {
        navigate("/after");
      }, 3000); // Delay 3 detik sebelum pindah ke halaman /after
    }
  }, [count, countdu, countti, countem, navigate]);

  const handleClick = () => {
    setCount((prevCount) => (prevCount >= 100 ? 0 : prevCount + 1));
  };

  const handleMClick = () => {
    setCount((prevCount) => (prevCount > 0 ? prevCount - 1 : 0));
  };

  const duhandleClick = () => {
    setCountdu((prevCount) => (prevCount >= 100 ? 0 : prevCount + 1));
  };

  const duhandleMClick = () => {
    setCountdu((prevCount) => (prevCount > 0 ? prevCount - 1 : 0));
  };

  const tihandleClick = () => {
    setCountti((prevCount) => (prevCount >= 100 ? 0 : prevCount + 1));
  };

  const tihandleMClick = () => {
    setCountti((prevCount) => (prevCount > 0 ? prevCount - 1 : 0));
  };

  const emhandleClick = () => {
    setCountem((prevCount) => (prevCount >= 100 ? 0 : prevCount + 1));
  };

  const emhandleMClick = () => {
    setCountem((prevCount) => (prevCount > 0 ? prevCount - 1 : 0));
  };

  return (
    <div className="w-[80%] bg-sky-900 rounded-lg text-white">
      <div>
        <div
          className="bg-stone-800 transition-all duration-500 flex justify-center"
          style={{ width: `${count}%` }}
        >
          {count}
        </div>
        <div className="flex items-center justify-center">
          <button onClick={handleMClick} className="bg-sky-700 rounded-2xl m-2 p-2">
            <img src="image/icon/arrow.svg" alt="" className="rotate-180" />
          </button>
          <button onClick={handleClick} className="bg-sky-700 rounded-2xl m-2 p-2">
            <img src="image/icon/arrow.svg" alt="" />
          </button>
        </div>
      </div>
      <div>
        <div
          className="bg-stone-800 transition-all duration-500 flex justify-center"
          style={{ width: `${countdu}%` }}
        >
          {countdu}
        </div>
        <div className="flex justify-center items-center">
          <button onClick={duhandleMClick} className="bg-sky-700 rounded-2xl m-2 p-2">
            <img src="image/icon/arrow.svg" alt="" className="rotate-180" />
          </button>
          <button onClick={duhandleClick} className="bg-sky-700 rounded-2xl m-2 p-2">
            <img src="image/icon/arrow.svg" alt="" />
          </button>
        </div>
      </div>
      <div>
        <div
          className="bg-stone-800 transition-all duration-500 flex justify-center"
          style={{ width: `${countti}%` }}
        >
          {countti}
        </div>
        <div className="flex justify-center items-center">
          <button onClick={tihandleMClick} className="bg-sky-700 rounded-2xl m-2 p-2">
            <img src="image/icon/arrow.svg" alt="" className="rotate-180" />
          </button>
          <button onClick={tihandleClick} className="bg-sky-700 rounded-2xl m-2 p-2">
            <img src="image/icon/arrow.svg" alt="" />
          </button>
        </div>
      </div>
      <div>
        <div
          className="bg-stone-800 transition-all duration-500 flex justify-center"
          style={{ width: `${countem}%` }}
        >
          {countem}
        </div>
        <div className="flex justify-center items-center">
          <button onClick={emhandleMClick} className="bg-sky-700 rounded-2xl m-2 p-2">
            <img src="image/icon/arrow.svg" alt="" className="rotate-180" />
          </button>
          <button onClick={emhandleClick} className="bg-sky-700 rounded-2xl m-2 p-2">
            <img src="image/icon/arrow.svg" alt="" />
          </button>
        </div>
      </div>

      {isMatched && (
        <div className="fixed top-0 left-0 w-full h-full flex flex-col justify-center items-center bg-opacity-75 bg-black transition-opacity duration-1000 opacity-100">
          <img src="image/char/jokowi.jpeg" alt="Congrats" className=" transition-opacity duration-1000 opacity-100" />
          <h1 className="text-4xl text-white mt-4">Congratulations!</h1>
        </div>
      )}
    </div>
  );
};
