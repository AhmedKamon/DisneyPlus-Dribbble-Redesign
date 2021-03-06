import Image from 'next/image';
import {HomeIcon, PlusIcon, SearchIcon, StarIcon} from '@heroicons/react/solid'
import { useState } from 'react';
import { useRouter } from 'next/router';



function Header({logedIn,setLogedIn}) {
  const router = useRouter()
 
  return (
    <header className="sticky bg-[#040714]  top-0 z-[1000] flex items-center h-[72px] px-10 md:px-12  ">
      <Image
        src="/images/logo.svg"
        width={80}
        height={80}
        alt="disny logo"
        className="cursor-pointer"
        onClick={() => router.push('/') }
      />

      { logedIn && <div className="ml-10 md:flex hidden items-center space-x-6  ">
        <a  className="header-link group">
          <HomeIcon className="h-4" />
          <span className='span'>Home</span>
        </a>
        <a  className="header-link group">
          <SearchIcon className="h-4" />
          <span className='span'>Search</span>
        </a>
        <a  className="header-link group">
          <PlusIcon className="h-4" />
          <span className='span'>Watchlist</span>
        </a>
        <a  className="header-link group">
          <StarIcon className="h-4" />
          <span className='span'>Originals</span>
        </a>
        <a  className="header-link group">
          <img src='/images/movie-icon.svg' className='h-5' alt='' />
          <span className='span'>Movies</span>
        </a>
        <a  className="header-link group">
          <img src='/images/series-icon.svg' className='h-5' alt='' />
          <span className='span'>Series</span>
        </a>
      </div>}
      {
        !logedIn ? (
          <button className='ml-auto uppercase border px-4 py-1.5 rounded font-medium tracking-wide hover:bg-white hover:text-black transition duration-200 ' onClick={() =>setLogedIn(!logedIn)}  >Login</button>
        ) : (
          <img onClick={() =>setLogedIn(false)}  src='images/kamrul.jpg' alt='user image' className=' ml-auto h-12 w-12 rounded-full object-cover cursor-pointer ' />
        )
      }

    </header>
  );
}

export default Header;

