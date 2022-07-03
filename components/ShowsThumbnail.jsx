
import Image from 'next/image'
import { useRouter } from 'next/router'
import React from 'react'

function MovieThumbnail({result}) {
  console.log(result,'sh');
    const BASE_URL = "https://image.tmdb.org/t/p/original/"
    const router = useRouter()
  return (
    <div className=' flex min-w-[250px] min-h-[170px] md:min-w-[330px] md:min-h-[210px] rounded-lg overflow-hidden  border-[3px] border-[#f9f9f9] border-opacity-10 hover:shadow-2xl hover:border-opacity-80 transform hover:scale-105 transition duration-300 cursor-pointer'
    onClick={() => router.push(`/populerShow/${result.id}`) }
    >
        <Image src={
        `${BASE_URL}${result.backdrop_path || result.poster_path}` ||  `${BASE_URL}${result.poster_path}`
    } width={330} height={210} className='object-cover rounded-lg' alt={result.title}/>
    </div>
  )
}

export default MovieThumbnail