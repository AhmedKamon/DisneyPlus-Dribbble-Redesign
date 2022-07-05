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
        <div className=' absolute flex flex-col justify-center items-center space-y-3 top-1/4 w-full max-w-screen-sm mx-auto p-8 -mt-16 '>
            <Image src='/images/cta-logo-one.svg' width='600' height='150' objectFit='contain' alt='' />
            <button className='bg-blue-600 uppercase text-xl tracking-wide font-extrabold py-4 px-6 w-full rounded hover:bg-[#0485ee]' >Get all There</button>
            <p className="text-xs text-center ">
            Get Premier Access to Raya and the Last Dragon for an additional fee
            with a Disney+ subscription. As of 03/26/21, the price of Disney+
            and The Disney Bundle will increase by $
          </p>
          <Image
            src="/images/cta-logo-two.png"
            width="600"
            height="70"
            objectFit="contain"
            alt=''
          />
        </div>
        </div>
       </secton>
    )
}

export default Hero
