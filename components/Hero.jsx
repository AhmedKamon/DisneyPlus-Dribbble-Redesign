import Head from 'next/head'
import Image from 'next/image'
import React from 'react'

function Hero() {
    return (
       <secton>
        <Head>
            <title>Log in | Disney+</title>
        </Head>
        <div className='relative min-h-[calc(100vh-72px)] ' >
            <Image src='/images/hero-background.jpg' alt='image' layout='fill' objectFit='cover' />
        </div>
        <div className=' flex justify-center items-center ' >
        <div className=' absolute flex flex-col justify-center items-center space-y-3 top-1/4 w-full max-w-sm mx-auto p-8 -mt-16 '>
            <Image src='/images/cta-logo-one.svg' width='600' height='150' objectFit='contain'  />
            <button className='bg-blue-600 uppercase text-xl tracking-wide font-extrabold py-4 px-6 w-full rounded hover:bg-[#0485ee]' >Get all There</button>
        </div>
        </div>
       </secton>
    )
}

export default Hero
