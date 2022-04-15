import React from 'react';
import Creations from './components/Creations';
import Footer from './components/Footer';
import Global from './components/Global';
import Hero from './components/Hero';
import VR from './components/VR';


function App() {

  return (
    <React.Fragment>
      <Global/>
      <Hero/>
      <VR/>
      <Creations/>
      <Footer/>
    </React.Fragment>
  );
}

export default App;
