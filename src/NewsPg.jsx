import React from 'react'
import Newswire from './Newswire'

function NewsPg() {
  return (
    <>
    <div className='news-hero-section h-full pb-10 bg-black text-white flex flex-col lg:flex-row '>
      <div className='news-hero-img h-full w-full lg:w-3/4 bg-cover'>
        <img src="Newwire/newswire-hero.jpg" alt=""/>
      </div>

      <div className='newsright-bar flex flex-col gap-y-1  h-auto w-full lg:w-1/3'> 
        <div className='trailer py-14 lg:py-24 px-10 flex flex-col leading-15'>
            <p className='text-sm font-bold'>GTA Online</p>
            <h2 className='text-4xl mt-4 font-bold'>GTA Online:Agents of Sabotage Now Available</h2>
        </div>
      </div>
    </div>

    <Newswire/>
    </>
  )
}

export default NewsPg
