import React from 'react';
import Header from '../../components/Header';
import SectionApplications from '../../components/SectionApplications';
import SectionBanner from '../../components/SectionBanner';
import SectionBudgetTag from '../../components/SectionBudgetTag';
import SectionFloorLeasing from '../../components/SectionFloorLeasing';
import SectionOurClients from '../../components/SectionOurClients';
import SectionOurFloors from '../../components/SectionOurFloors';
import SectionWhatWeDo from '../../components/SectionWhatWeDo';
import SectionWhy from '../../components/SectionWhy';

// import { Container } from './styles';

function Home() {
  return (
      <>
        <Header />
        <SectionBanner />
        <SectionFloorLeasing />
        <SectionOurFloors />
        <SectionWhatWeDo />
        <SectionWhy />
        <SectionApplications />
        <SectionOurClients />
        <SectionBudgetTag />
      </>
    );
}

export default Home;