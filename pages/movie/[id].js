import { PlusIcon } from '@heroicons/react/solid';
import Head from 'next/head';
import Image from 'next/image';
import React, { useState } from 'react';
import Header from '../../components/Header';
import Hero from '../../components/Hero';

function Movie({ result }) {
  const BASE_URL = 'https://image.tmdb.org/t/p/original/';
  const [logedIn, setLogedIn] = useState(true);
  const [showPlayer, setShowPlayer] = useState(false);
  return (
    <div>
      <Head>
        <title>{result.title || result.original_name}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header logedIn={logedIn} setLogedIn={setLogedIn} />
      {!logedIn ? (
        <Hero />
      ) : (
        <section className="relative x-50 ">
          <div className="relative min-h-[calc(100vh-72px)] ">
            <Image
              src={
                `${BASE_URL}${result.backdrop_path || result.poster_path}` ||
                `${BASE_URL}${result.poster_path}`
              }
              layout="fill"
              objectFit="cover"
              alt={result.title}
            />
          </div>
          <div className=" absolute inset-y-28 md:inset-y-auto md:bottom-10 inset-x-4 md:inset-x-12 space-y-6 z-50 ">
            <h1 className="text-3xl sm:text-4xl md:text-5xl ">
              {' '}
              {result.title || result.original_name}
            </h1>
            <div className="flex items-center space-x-3 md:space-x-5 ">
              <button className=" text-xs md:text-base bg-[#f9f9f9] text-black flex items-center  justify-center py-2.5  px-6 rounded space-x-2 hover:bg-[#c6c6c6] ">
                <img
                  className="h-6 md:h-8 "
                  src="/images/play-icon-black.svg"
                  alt=""
                />
                <span className="uppercase font-medium tracking-wide ">
                  Play
                </span>
              </button>
              <button
                className=" text-xs md:text-base bg-black/30 border border-[#f9f9f9] text-[#f9f9f9] flex items-center  justify-center py-2.5  px-6 rounded space-x-2 hover:bg-[#c6c6c6] "
                onClick={() => setShowPlayer(true)}
              >
                <img
                  className="h-6 md:h-8 "
                  src="/images/play-icon-white.svg"
                  alt=""
                />
                <span className="uppercase font-medium tracking-wide ">
                  Trailer
                </span>
              </button>
              <div className="rounded-full border-2 border-white flex items-center justify-center w-11 h-11 cursor-pointer bg-black/60 ">
                <PlusIcon className="h-6" />
              </div>
              <div className="rounded-full border-2 border-white flex items-center justify-center w-11 h-11 cursor-pointer bg-black/60 ">
                <img src="/images/group-icon.svg" alt="" />
              </div>
            </div>

            <p className="text-xs md:text-sm ">{}</p>
          </div>
        </section>
      )}
    </div>
  );
}

export default Movie;

export async function getServerSideProps(ctx) {
  const { id } = ctx.query;

  const req = await fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.API_KEY}&language=en-US&append_to_response=videos`
  ).then((res) => res.json());

  return {
    props: {
      result: req,
    },
  };
}
