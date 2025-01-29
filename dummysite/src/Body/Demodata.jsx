import React from 'react'

const Demodata = () => {
  return (
    <div className='flex-col mt-20 '>
        <h1 className='text-black text-3xl flex justify-center text-center'>Top Men Fashion</h1>
        <div className="Categories border-black p-4 flex  items-center justify-center  gap-5 ">
            <div className="div"><img className="h-full w-full object-cover"src="https://images.pexels.com/photos/837140/pexels-photo-837140.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" srcset="" />
            <p className="mt-2 text-center font-semibold text-lg text-black">Winter Coats for Mountain Adventures</p>
            </div>
            <div className="div"><img className="h-full w-full object-cover" src="https://images.pexels.com/photos/375880/pexels-photo-375880.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" srcset="" />
            <p className="mt-2 text-center font-semibold text-lg text-black">Trendy Streetwear for City Living</p>
            </div>
            <div className="div"><img className="h-full w-full object-cover" src="https://images.pexels.com/photos/69212/pexels-photo-69212.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" srcset="" />
            <p className="mt-2 text-center font-semibold text-lg text-black">Casual T-shirt for Relaxed Beach Days</p>
            </div> 
            <div className="div"><img className="h-full w-full object-cover" src="https://images.pexels.com/photos/826380/pexels-photo-826380.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" srcset="" />
            <p className="mt-2 text-center font-semibold text-lg text-black">Adventure-Ready Fashion for the Outdoors</p>
            </div>
        </div>
        <div className="adds flex justify-center items-center mt-20">
        <img  src="https://img.freepik.com/free-vector/gradient-shopping-center-social-media-promo-template_23-2149328602.jpg?ga=GA1.1.1958398441.1735524025&semt=ais_hybrid" alt="" srcset="" />
        </div>
        
    </div>
  )
}

export default Demodata