import React from 'react'
import Doors from '../doors/Doors'
import '../../textc.css'
const DoorPage = () => {
  return (
    <div>
      <div className='h-screen flex flex-col items-center justify-center'>
         <h1 className='text-center text-4xl px-10 text-gud'>
          okeee sekarang aku punya permainan, jadi kamu harus nyari pintu mana yang ada button buat pindah ke halaman selanjutnya, tinggal klik aja nanti bakal ketemu, okee semoga berhasil!!!
         </h1>
         <div className='bg-black rounded-full animate-bounce mt-10'>
         <img src="image/icon/arrow.svg" alt="fds" className='rotate-90 h-[100px]' />
         </div>
      </div>
      <div>
      <Doors/>
    </div>
    </div>
  )
}

export default DoorPage
