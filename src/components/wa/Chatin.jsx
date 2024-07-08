import React from 'react';

const Chatin = (props) => {
  const { textt, posi, 
    backC = "bg-[#D0FECF]",
    textColor = "text-black" ,
    linkNya ,
    textNya
  } = props;

  return (
    <div className='my-2 mx-1 '>
      <div className={`${backC} text-gray-800 px-3 py-1 rounded-md max-w-52 text-sm  ${posi} ${textColor}`}>
        <p>{textt}  <a className='text-blue-700' href={linkNya}>{textNya}</a></p>
       
        
      </div>
    </div>
  );
}

export default Chatin;
