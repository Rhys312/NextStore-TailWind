import Head from 'next/head';
import Header from '../components/Header';
import Row from '../components/Row';
import Info from '../components/Info';
import { useState, useContext } from 'react';
import requests from '../utils/requests';
import CartInfo from '../components/CartInfo';
import InfoContext from '../store/InfoProvider';

const Home = ({
  netflixOriginals,
  trendingNow,
  topRated,
  actionMovies,
  comedyMovies,
  horrorMovies,
  romanceMovies,
  documentaries,
}) => {
  const infoCtx = useContext(InfoContext);
  const modalState = infoCtx.modalState;
  const modalCartState = infoCtx.modalCartState;

  return (
    <div>
      <Head>
        <title>NextStore</title>
      </Head>
      <main className="flex flex-col">
        {modalState && <Info />}
        {modalCartState && <CartInfo />}
        <div className="flex">
          <Header netflixOriginals={netflixOriginals} />
        </div>
        <div className="flex overflow-hidden">
          <Row movies={trendingNow} />
        </div>
      </main>
    </div>
  );
};

export default Home;

export async function getServerSideProps() {
  const [
    netflixOriginals,
    trendingNow,
    topRated,
    actionMovies,
    comedyMovies,
    horrorMovies,
    romanceMovies,
    documentaries,
  ] = await Promise.all([
    fetch(requests.fetchNetflixOriginals).then((res) => res.json()),
    fetch(requests.fetchTrending).then((res) => res.json()),
    fetch(requests.fetchTopRated).then((res) => res.json()),
    fetch(requests.fetchActionMovies).then((res) => res.json()),
    fetch(requests.fetchComedyMovies).then((res) => res.json()),
    fetch(requests.fetchHorrorMovies).then((res) => res.json()),
    fetch(requests.fetchRomanceMovies).then((res) => res.json()),
    fetch(requests.fetchDocumentaries).then((res) => res.json()),
  ]);

  return {
    props: {
      netflixOriginals: netflixOriginals.results,
      trendingNow: trendingNow.results,
      topRated: topRated.results,
      actionMovies: actionMovies.results,
      comedyMovies: comedyMovies.results,
      horrorMovies: horrorMovies.results,
      romanceMovies: romanceMovies.results,
      documentaries: documentaries.results,
    },
  };
}
