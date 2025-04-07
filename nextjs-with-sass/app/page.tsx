import React from 'react';
import './styles/globals.scss';

// components
import Nav from '../components/nav/nav';
import Title from '../components/title/title';
import Introduction from '../components/introduction/introduction';
import Gallery from '../components/gallery/gallery';
import ParkDescriptions from '../components/parkDescriptions/parkDescriptions';
import Footer from '../components/footer/footer';


const HomePage = () => {
  return (
    <main >
      <Nav />
      <Title />
      <Introduction />
      <Gallery />
      <ParkDescriptions />
      <Footer />
    </main>
  );
};

export default HomePage;