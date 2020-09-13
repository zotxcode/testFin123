import React from 'react';
import Contact from './components/Contact';
import Content from "./components/Content";
import Footer from './components/Footer';
import Navbar from "./components/Navbar";
import Partners from './components/Partners';
import People from './components/People';
import Testimonials from "./components/Testimonials";
import Sidebar from './components/Sidebar';
import './App.css';

import banner from "./assets/2-banner/banner.png";

function App() {
  return (
    <div id="app" className="App">
      <Navbar />
      <Sidebar show={false} />
      <div className="position-relative bg-header pt-4 mb-6">
        <div className="container">
          <div className="row">
            <div className="col-md-6 my-5">
              <h1 className="display-4 font-weight-bold text-white">Make development easy with us.</h1>
              <p className="font-weight-normal text-white mb-0">Doing development can never be easy, and it takes time and resources.</p>
              <p className="font-weight-normal text-white">We at EasyWork has the solution.</p>
            </div>
            <div className="col-md-6 my-5 position-relative">
              <div className="position-md-absolute banner-img">
                <img src={banner} className="img-fluid" alt="banner" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <Content />
        <Testimonials />
        <People />
        <Partners />
        <Contact />
      </div>

      <Footer />

      

    </div>
  );
}

export default App;
