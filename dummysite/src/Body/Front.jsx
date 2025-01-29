import React from 'react';


const Front = () => {
  return (
    <div className='h-full w-[100%] flex justify-between items-center'>
      <div className="left flex-col justify-between items-center text-center h-full w-[50%]">
    <p className='text-black text-xl font-bold'>NEW ARRIVALS ONLY</p>
    <h1 className='text-black text-3xl font-bold'>New 👋</h1>
    <h1 className='text-black text-3xl font-bold'>Collection</h1>
    <h1 className='text-black text-3xl font-bold'>For Everyone</h1>
    <button className='rounded-full text-white bg-red-500 mt-5 w-36 h-10'>Latest Collections</button>
</div>

      <div className="right text-black ">
  <img 
    src="https://img.freepik.com/free-photo/young-woman-standing-with-shopping-bags-street_23-2147823593.jpg?ga=GA1.1.1958398441.1735524025&semt=ais_hybrid" 
    alt="Shopping woman"
    className="filter  w-full h-full object-cover" />
</div>
  
    </div>
  );
}

export default Front;
