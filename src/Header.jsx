import React from 'react'
import { useState } from 'react';
import Home from './Home';
import NewsPg from './NewsPg';
import { Link, Routes, Route } from 'react-router-dom';
import Download from './Download';
import Video from './Video';

function Header() {
  const featured_games = [
    {
      img: "/games/game1.jpg"
    },
    {
      img: "/games/game2.jpg"
    },
    {
      img: "/games/game3.jpg"
    },
    {
      img: "/games/game4.jpg"
    },
    {
      img: "/games/game5.jpg"
    }
  ]
  const header_menu_button = "h-full w-auto flex items-center px-4 border-b-2 border-transparent hover:border-white cursor-pointer";
  const Active_state = "h-full w-auto flex items-center px-4 border-b-2 border-white";

  const[hideOption, setOption] = useState(false)
  const [active, setActive] = useState(1);

  function changer(a){
    setActive(a);
     if(a === 1) setOption(!hideOption);
    }



  

  return (
    <>
      <div className='header h-20 lg:h-24 w-full items-center lg:justify-around bg-black text-white  lg:border-b  lg:border-gray-500 lg:border-opacity-50 flex relative'>


        <div className='Mobile flex justify-between items-center h-full w-full lg:hidden px-8'> 
            <div className="ham" onClick={()=> changer(1)}>
            <i class="fa-solid fa-bars text-3xl"></i>
            </div>

            <div className={`HideNav border-b border-gray-500 border-opacity-50 absolute flex flex-col gap-4  w-full bg-black left-0 top-20  transition-all overflow-hidden  duration-300 ease-out ${hideOption ? "h-auto py-10 px-8 ": "h-0"}`}>
                    <div className=" overflow-hidden">
                    <input type="text" className='w-full h-10 p-1 text-lg text-black overflow-hidden rounded' placeholder='Search'/>
                    </div>

          <div className='py-2 md:py-10 flex items-center justify-between overflow-hidden'>
               <h2 className='text-xl md:text-3xl font-bold'>Featured Games</h2>
              <p className=' text-sm md:text-xl md:font-bold'>VIEW ALL</p>

           </div>

           <div className='img-container flex gap-4 mt-4 w-full h-auto overflow-x-auto'>
           {featured_games.map((item) =>(
                  <div className='w-full h-auto border  border-gray-500 border-opacity-50 rounded'><img src={item.img} alt="Games" className="object-cover rounded" /></div>
           ))}
           </div>

           <div className='flex w-full my-10 flex-col gap-4'>
            <Link to="newswire" className='w-full '>
              <span className='text-2xl font-bold'>Newswire</span>
            </Link>
            <Link to="videos" className='w-full '>
              <span className='text-2xl font-bold'>
                Videos
              </span>
            </Link>
            <Link to="Downloads" className='w-full'>
              <span className='text-2xl font-bold'>
                Downloads
              </span>
            </Link>
            <Link to="videos" className='w-full'>
              <span className='text-2xl font-bold'>
                Store
              </span>
            </Link>
            <Link to="support" className='w-full'>
              <span className='text-2xl font-bold'>
                Support
              </span>
            </Link>
           </div>
              </div>

            <div>
            <div className='logo mx-5'>
              <Link to="home">
              <img src="/img/logo1.jpeg" alt="Logo" className='w-10'/>
              </Link>
              </div>
            </div>

            <div>
               <div className="login flex  items-center px-4">
                <i class="fa-regular fa-circle-user text-3xl"></i>
                </div>
            </div>

        </div>

    <div  className=" hidden lg:flex md:items-center md:justify-around h-full w-full">
     <div className='logo mx-5'>
      <Link to="home">
        <img src="/img/logo1.jpeg" alt="Logo" height={10} width={40}/>
      </Link>
      </div>
      

      <div className='links  flex h-full items-center justify-around'>
        <a className={`${header_menu_button} ${active==1 ? Active_state:""}`}  onClick={()=> changer(1)}>Games <i class="fa-solid fa-chevron-down px-2"></i>
        <div className={`absolute flex flex-col justify-center w-full bg-black left-0 top-24  border  border-gray-500 border-opacity-50 rounded-md border-t-0 overflow-hidden transition-all duration-300 ease-out ${hideOption ? "h-auto py-16 px-12 ": "h-0"}`}>
           <div className='flex justify-between overflow-hidden'>
            <h2 className='text-4xl font-bold'>Featured Games</h2>
            <p className='text-xl font-bold'>VIEW ALL</p>

           </div>

           <div className='flex gap-4 mt-4 overflow-hidden'>
           {featured_games.map((item) =>(
                  <div className='w-full h-auto border  border-gray-500 border-opacity-50 rounded'><img src={item.img} alt="" className="object-cover rounded"/></div>
           ))}
           </div>
    
        </div>
        </a>
      <Link to="newswire"  className={` ${header_menu_button} ${active==2 ? Active_state :""}`}  onClick={()=> changer(2)}>  Newswire  </Link>
      
     <Link to="video" className={` ${header_menu_button} ${active==3 ? Active_state :""}`}  onClick={()=> changer(3)}>Video</Link> 
       <Link to="downloads" className={` ${header_menu_button} ${active==4 ? Active_state :""}`}  onClick={()=> changer(4)}>Downloads</Link> 
         <Link to="store" className={` ${header_menu_button} ${active==5 ? Active_state :""}`}  onClick={()=> changer(5)}>Store <img src="https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/9db08c7809308ca2fa4614f3c2d45a91.svg" alt="" className='w-5 ps-1'/></Link>  
        <Link to="support" className={` ${header_menu_button} ${active==6 ? Active_state :""}`}  onClick={()=> changer(6)}>Support <img src="https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/9db08c7809308ca2fa4614f3c2d45a91.svg" alt="" className='w-5 ps-1'/></Link>
      </div>


      <div className='icons flex justify-around'>
        <button className='get-btn h-9 px-4 rounded'>GET LAUNCHER</button>

        <div className="search px-8 flex  items-center">
        <i class="fa-solid fa-magnifying-glass text-xl"></i>
        </div>

        <div className="login flex  items-center px-4">
        <i class="fa-regular fa-circle-user text-xl"></i>
        </div>
      </div>
     </div>
    </div>

    <Routes>
      <Route path="/" element={<Home></Home>}></Route>
      <Route path="home" element={<Home></Home>}></Route>
      <Route path="newswire" element={<NewsPg></NewsPg>}></Route>
      <Route path='downloads' element={<Download></Download>}></Route>
      <Route path='video' element={<Video></Video>}></Route>
    </Routes>
    </>
  )
}

export default Header
