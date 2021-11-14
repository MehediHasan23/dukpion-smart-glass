import React from 'react';
import AboutCollection from '../../Home/AboutCollection/AboutCollection';
import KeepTouch from '../../Home/KeepTouch/KeepTouch';
import Services from '../../Home/Services/Services';
import BestSeller from '../BestSeller/BestSeller';
import CollectionBanner from '../CollectionBanner/CollectionBanner';
import CollectionDetails from '../CollectionDetails/CollectionDetails';
import Optics from '../Optics/Optics';
import Pair from '../Pair/Pair';
import SpecialOffers from '../SpecialOffers/SpecialOffers';

const Collections = () => {
  return (
    <div style={{ background: "#D8E8EB" ,padding:'50px'}}>
      <CollectionBanner />
      <CollectionDetails />
      {/* <Optics />
      <AboutCollection />
      <Services />
      <Pair /> */}
      <SpecialOffers />
      <KeepTouch />
      <BestSeller/>

    </div>
  );
};

export default Collections;