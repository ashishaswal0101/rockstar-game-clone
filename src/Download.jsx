import React from 'react'

function Download() {
  return (
   <>
     <div className='download-hero-section h-full p-14 lg:p-20 bg-black text-white '>
       <div className=' rounded-lg overflow-hidden flex flex-col gap-10 lg:p-20 lg:flex-row '>
       <div className='lg:w-1/2 w-full'>
            <img src="download/downloadhero.jpg" alt="" className='' />
        </div>
        <div className='lg:w-1/2 w-full'>
            <h1 className='text-4xl font-bold pb-8'>Red Dead Redemption 2</h1>
            <p className='text-pretty tracking-wide '>America, 1899. The end of the Wild West era has begun as lawmen hunt down the last remaining outlaw gangs. Those who will not surrender or succumb are killed. 
            <br/><br />
            After a robbery goes terribly wrong in the western town of Blackwater, Arthur Morgan and the Van der Linde gang are forced to flee. With federal agents and the best bounty hunters in the nation massing on their heels, the gang must rob, steal, and fight their way across the rugged heartland of America in order to survive. As deepening internal divisions threaten to tear the gang apart, Arthur must make a choice between his own ideals and loyalty to the gang who raised him.
            </p>

            <button className='h-16 w-full mt-10  hover:bg-[#fcaf17] hover:text-black hover:border-0 font-bold text-xl duration-100 ease-in-out p-2 lg:mt-10 text-center rounded-lg border-2 border-t-white '>DOWNLOAD NOW</button>

        </div>
       </div>
    </div>
   </>
  )
}

export default Download
