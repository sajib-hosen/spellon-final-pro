import React from 'react';
import './App.css';
import BusinessOpt from './Components/BusinessOpt';
import Calender from './Components/Calender';
import Footer from './Components/Footer';
import MeetTheTeam from './Components/MeetTheTeam';
import ScaleYourBusiness from './Components/ScaleYourBusiness';
import TopBaner from './Components/TopBaner';
import WhatDoWeOffer from './Components/WhatDoWeOffer';
import WhatOther from './Components/WhatOther';
import WhyAdverlo from './Components/WhyAdverlo';

function App() {
  const pinLen = 3000;
  return (
    <div className="App">
        <TopBaner/>
        <WhyAdverlo/>
        <BusinessOpt/>
        <WhatDoWeOffer/>
        <WhatOther/>
        <ScaleYourBusiness pinFor={3000} />
        <div className={`h-[3000px]`} ></div>
        <MeetTheTeam/>
        <Calender />
        <Footer/>
    </div>
  );
}

export default App;
