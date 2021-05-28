import React from 'react';
import Header from '../../components/Header';
import SectionBanner from '../../components/SectionBanner';
import SectionFloorLeasing from '../../components/SectionFloorLeasing';
import SectionOurFloors from '../../components/SectionOurFloors';

// import { Container } from './styles';

function Home() {
  return (
      <>
        <Header />
        <SectionBanner />
        <SectionFloorLeasing />
        <SectionOurFloors />
      </>
    );
}

export default Home;