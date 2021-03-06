import Head from 'next/head';
import { useState } from 'react';
import Brands from '../components/Brands';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Slider from '../components/Slider';
import MoviesCollection from '../components/MoviesCollection';
import ShowsCollection from '../components/ShowsCollection';

export default function Home({
  populerMovies,
  populerShows,
  top_ratedMovies,
  top_ratedShows,
}) {
  const [logedIn, setLogedIn] = useState(false);
  return (
    <div>
      <Head>
        <title>Disney+</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header logedIn={logedIn} setLogedIn={setLogedIn} />
      {!logedIn ? (
        <Hero />
      ) : (
        <main className=" relative min-h-screen after:bg-home after:bg-center after:bg-cover after:bg-no-repeat after:bg-fixed after:absolute after:inset-0 after:z-[-10] ">
          <Slider />
          <Brands />
          <MoviesCollection results={populerMovies} title="Populer Movies" />
          <ShowsCollection results={populerShows} title="Populer Shows" />
          <MoviesCollection
            results={top_ratedMovies}
            title="Top Rated Movies"
          />
          <ShowsCollection results={top_ratedShows} title="Top Rated Shows" />
        </main>
      )}
    </div>
  );
}

export async function getServerSideProps(ctx) {
  const [
    populerMoviesRes,
    populerShowsRes,
    top_ratedMoviesRes,
    top_ratedShowsRes,
  ] = await Promise.all([
    fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}&language=en-US&page=1`
    ),
    fetch(
      `https://api.themoviedb.org/3/tv/popular?api_key=${process.env.API_KEY}&language=en-US&page=1`
    ),
    fetch(
      `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.API_KEY}&language=en-US&page=1`
    ),
    fetch(
      `https://api.themoviedb.org/3/tv/top_rated?api_key=${process.env.API_KEY}&language=en-US&page=1`
    ),
  ]);

  const [populerMovies, populerShows, top_ratedMovies, top_ratedShows] =
    await Promise.all([
      populerMoviesRes.json(),
      populerShowsRes.json(),
      top_ratedMoviesRes.json(),
      top_ratedShowsRes.json(),
    ]);

  return {
    props: {
      populerMovies: populerMovies.results,
      populerShows: populerShows.results,
      top_ratedMovies: top_ratedMovies.results,
      top_ratedShows: top_ratedShows.results,
    },
  };
}
