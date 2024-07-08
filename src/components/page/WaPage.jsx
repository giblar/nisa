import React, { useState } from 'react';
import Wa from '../wa/Wa';
import Bottom from '../wa/Bottom';
import { ToggleProvider } from '../ToggleContext';
import { Link } from 'react-router-dom';
import 'animate.css/animate.min.css'; 
const WaPage = () => {
  const [isRedDivVisible, setIsRedDivVisible] = useState(true);

  const toggleRedDiv = () => {
    setIsRedDivVisible(!isRedDivVisible);
  };

  return (
    <div className="relative">
      {isRedDivVisible && (
        <div className="fixed inset-0 flex justify-center items-center z-50">
          <div className={`max-w-md border rounded-lg bg-white animate__animated animate__lightSpeedInRight ${isRedDivVisible? '': 'animate__lightSpeedOutLeft'}`}>
            <div className="flex flex-col p-5 rounded-lg shadow">
              <div className="flex">
                <div>
                  <svg className="w-6 h-6 fill-current text-blue-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M0 0h24v24H0V0z" fill="none" />
                    <path d="M11 7h2v2h-2zm0 4h2v6h-2zm1-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
                  </svg>
                </div>

                <div className="ml-3">
                  <h2 className="font-semibold text-gray-800">perhatian perhatian!!</h2>
                  <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                    coba cari chat yang mana yang bisa diteken , terus kalo udah , klik link nya ,maap gaje aku bingung banget ini teh bikin page baru apa engga, kalo bikin aku takut bikin web nya berat jadi maklumi yaa kalo aneh 
                  </p>
                </div>
              </div>

              <div className="flex justify-end items-center mt-3">
                <Link to="/door" className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-800 text-sm font-medium rounded-md">
                  Cancel
                </Link>

                <button onClick={toggleRedDiv} className="px-4 py-2 ml-2 bg-blue-500 hover:bg-blue-600 text-white text-sm font-medium rounded-md">
                  Continue
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <ToggleProvider>
        <div className={`w-full h-screen flex items-center justify-center ${isRedDivVisible ? 'blur-sm' : ''}`}>
          <div className='max-w-md w-full h-[100vh] flex flex-col border'>
            <Wa />
            <Bottom />
          </div>
        </div>
      </ToggleProvider>
    </div>
  );
}

export default WaPage;
