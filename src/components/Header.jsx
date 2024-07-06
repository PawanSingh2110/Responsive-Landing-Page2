import React from 'react'
import Star from "../assets/icon-star.svg"
import Colton from "../assets/image-colton.jpg"
import Anne from "../assets/image-anne.jpg"
import Irene from "../assets/image-irene.jpg"


const Header = () => {
  return (
    <div className=' header md:w-[80%] md:mx-auto  '>
      <div className='mt-16 md:mt-28 md:grid md:grid-cols-2'>
        <div className='' >
            <h1 className='text-5xl  text-center text-purple-950 font-medium md:text-7xl md:text-left md:w-[60%] md:px-5'>10000+ of our user love our products </h1>
            <p className='text-center px-6 mt-4 font-medium text-purple-400 md:text-left md:text-xl md:w-[85%]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut molestias animi commodi, doloremque repellat earum perferendis qui ipsum. Pariatur eveniet fuga voluptatem molestiae voluptate id.</p>
        </div>
        <div className='mt-5 flex  flex-col gap-5 px-5 md:px-0  ' >
           <div className='flex flex-col justify-center items-center h-16 bg-slate-100 rounded-xl md:flex-row md:gap-10 md:w-[70%] md:ml-16 '>
           <div className='flex gap-2'>
                <img src={Star} className='md:w-6' alt="" />
                <img src={Star} alt="" className='md:w-6' />
                <img src={Star} alt="" className='md:w-6'/>
                <img src={Star} alt=""className='md:w-6' />
                <img src={Star} alt="" className='md:w-6'/>
            </div>
            <div>
                <h1 className='text-lg font-medium text-purple-900 md:text-2xl'>Rated 5 star in Review</h1>
            </div>
           </div>
           <div className='flex flex-col justify-center items-center h-16 bg-slate-100 rounded-xl md:flex-row md:gap-10 md:w-[70%] md:ml-40'>
           <div className='flex gap-2 md:pl-12'>
                <img src={Star} alt="" className='md:w-6'/>
                <img src={Star} alt="" className='md:w-6' />
                <img src={Star} alt="" className='md:w-6' />
                <img src={Star} alt="" className='md:w-6' />
                <img src={Star} alt="" className='md:w-6'/>
            </div>
            <div>
                <h1 className='text-lg font-medium text-purple-900 md:text-2xl '>Rated 5 star in ReportGuru</h1>
            </div>
           </div>
           <div className='flex flex-col justify-center items-center h-16 bg-slate-100 rounded-xl md:flex-row md:gap-10 md:w-[70%] md:ml-56 md:px-9 '>
           <div className='flex gap-2'>
                <img src={Star} alt="" className='md:w-6'/>
                <img src={Star} alt="" className='md:w-6'/>
                <img src={Star} alt="" className='md:w-6'/>
                <img src={Star} alt="" className='md:w-6'/>
                <img src={Star} alt="" className='md:w-6'/>
            </div>
            <div>
                <h1 className='text-lg font-medium text-purple-900 md:text-2xl'>Rated 5 star in bestTech</h1>
            </div>
           </div>


        </div>
      </div>
      {/* down part of the task  */}

      <div className='mt-16  md:ml-10  '>
        <div className='px-4 grid grid-cols-1 md:grid-cols-3 '>
            <div className='bg-purple-950 p-6 md:mb-20 rounded-xl md:w-[80%] md:px-10 md:py-10 md:mt-10' >
                <div className='flex items-center gap-5 px-5'>
                    <img src={Colton} alt="" className='w-16 rounded-full' />
                    <div>
                        <p className='text-white text-lg'>Colton Smith</p>
                        <p className='text-purple-600'>Verified Buyer</p>
                    </div>

                </div>
                <p className=' px-1 text-center text-white text-lg mt-5'> "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi neque nam obcaecati! Tenetur fugit dolor velit. Eum, maxime! Eligendi, dolores. Et incidunt non repellendus cum dolorem enim re;</p>

            </div>
            <div className='bg-purple-950 p-6 rounded-xl mt-5 md:mb-20 md:w-[80%] md:px-10 md:py-10 md:mt-16' >
                <div className='flex items-center gap-5 px-5'>
                    <img src={Anne} alt="" className='w-16 rounded-full' />
                    <div>
                        <p className='text-white text-lg'>Anne Walkers</p>
                        <p className='text-purple-600'>Verified Buyer</p>
                    </div>

                </div>
                <p className=' px-1 text-center text-white text-lg mt-5'> "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi neque nam obcaecati! Tenetur fugit dolor velit. Eum, maxime! Eligendi, dolores. Et incidunt non repellendus cum dolorem enim re;</p>

            </div>
            <div className='bg-purple-950 p-6 rounded-xl mt-5 mb-20 md:w-[80%] md:px-10 md:py-10 md:mt-24' >
                <div className='flex items-center gap-5 px-5'>
                    <img src={Irene} alt="" className='w-16 rounded-full' />
                    <div>
                        <p className='text-white text-lg'>Irene Roberts</p>
                        <p className='text-purple-600'>Verified Buyer</p>
                    </div>

                </div>
                <p className=' px-1 text-center text-white text-lg mt-5'> "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi neque nam obcaecati! Tenetur fugit dolor velit. Eum, maxime! Eligendi, dolores. Et incidunt non repellendus cum dolorem enim re;</p>

            </div>

        </div>
      </div>
    </div>
  )
}

export default Header
