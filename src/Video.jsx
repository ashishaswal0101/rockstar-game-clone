import React from 'react'

function Video() {
  return (
    <>
    <div className='hero-section h-full pb-10 bg-black text-white flex flex-col lg:flex-row'>
      <div className='hero-img '><img src="/Video/herovid.webp" alt="GTA-5" className='h-full w-[100%]'/></div>
      <div className='hero-left flex flex-col gap-y-1  h-auto w-full lg:w-[30%]'> 
        <div className='trailer py-24 px-10 flex w-full flex-col  sm:flex-row sm:justify-between   lg:flex-col leading-15'>
        <div>
          <p className='text-lg font-bold'>Grand Theft Auto VI</p>
          <h2 className='text-5xl font-bold'>Trailer 1</h2>
        </div>
        <div>
        <button className='h-16 w-full mt-10 sm:m-0 sm:w-56 hover:bg-[#fcaf17] hover:text-black hover:border-0 font-bold text-xl duration-100 ease-in-out p-2 lg:mt-10 text-center rounded border-2 border-t-white '>WATCH NOW</button>
        </div>
        </div>

        <div className=''>

        </div>
      </div>
    </div>

    <div className='flex flex-col bg-black text-white w-full px-16 py-20'>
        <h2 className=' text-2xl font-bold my-6'>Videos from Grand Theft Auto VI</h2>
        <div className='w-full lg:w-2/6 border  border-gray-500 border-opacity-50 rounded-lg overflow-hidden'>
          <img src="/global.jpg" alt="" />
          <div className='p-6 flex flex-col'>
          <span>Grand Theft Auto VI</span>
          <span className=' font-bold text-lg'>Trailer 4</span>
          </div>
        </div>
    </div>
    </>
  )
}

export default Video
