import React from 'react'
import { Link } from 'react-router-dom'
import { Nyoba } from '../nyoba/Nyoba'

const Magic = () => {
  return (
    <div>
      <div className=' text-5xl font-bold h-screen'>
      <p className='fixed text-black'>Do you know, why did I make all this?  <span className='text-white text-center'>because i love you, hheheheh ohiya ada pesan yang mau aku kasi ke kmu, pencet tombol dibawah ya</span> </p>
    </div>
    <div className='bg-black h-screen flex items-end'>
      
      <Link to="/click" className='bg-white px-3 py-2 h-12 mb-10'>ini</Link>
    
    </div>
    
    </div>
  )
}

export default Magic
