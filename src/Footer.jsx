import React from 'react'

function Footer() {
  return (
    <>      
    <div className='flex bg-black p-20 gap-32 flex-wrap flex-col sm:flex-row justify-between text-white'>
        <div className="flex gap-3 flex-col lg:flex-row font-bold lg:w-1/2">
            <a href="#">Contact</a>
            <a href="#">Careers</a>
            <a href="#">Community</a>
            <a href="#">Guidelines</a>
            <a href="#">Subscribe</a>
        </div>

        <div className='flex items-start lg:items-center gap-4 lg:w-1/2"'>
        <i class="fa-solid fa-globe"></i>
        <select name="language" className='bg-transparent language outline-none'>
            <option value="">English</option>
            <option value="">Deutsch</option>
            <option value="">Italiano</option>
            <option value="">Francais</option>
            <option value="">Polski</option>
        </select>
        </div>

        <div className='hidden w-1/2 lg:flex flex-col gap-4'>
            <span>Corporate</span>
            <span>Privacy</span>
            <span>Cookie Settings</span>
            <span>Legal</span>
            <span>Do Not Sell or Share My Personal Information</span>
        </div>

        <div className='w-full lg:w-auto text-white flex items-start gap-8 '>
        <i class="fa-brands fa-x-twitter text-xl"></i>
        <i class="fa-brands fa-instagram text-xl"></i>
        <i class="fa-brands fa-youtube text-xl"></i>
        <i class="fa-brands fa-twitch text-xl"></i>
        <i class="fa-brands fa-facebook text-xl"></i>
        </div>


        <div className=' lg:hidden flex flex-col gap-4'>
            <span className='text-xs '>Corporate</span>
            <span className='text-xs '> Privacy</span>
            <span className='text-xs '>Cookie Settings</span>
            <span className='text-xs '>Legal</span>
            <span className='text-xs '>Do Not Sell or Share My Personal Information</span>
        </div>

        <section className='w-full flex flex-col justify-center items-center lg:justify-between'>
            <div><span className='text-xs font-semibold'>Roackstar</span></div>
            <div className='flex gap-3'>
                <span className='text-xs font-semibold'>New York</span>
                <span className='text-xs font-semibold'>London</span>
                <span className='text-xs font-semibold'>Paris</span>
                <span className='text-xs font-semibold'>Bogota</span>
            </div>
            <div>
                <span className='text-xs font-semibold'>MCMXCVIII</span>
            </div>
        </section>
    </div>    
    </>
  )
}

export default Footer
