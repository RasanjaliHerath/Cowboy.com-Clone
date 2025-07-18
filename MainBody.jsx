import React from 'react';
import './MainBody.css';
import { ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import WhyCb from './WhyCb';
import Footer from './Footer';
import TakeQuisModel from './TakeQuisModel';
import ExploreModel from './ExploreModel'; 
import CrossST from './CrossST';
import Classic from './Classic';
import CruiserST from './CruiserST';
import ExploreConnect from './ExploreConnect'; 
import Cross from './Cross';
import Design from './Design'; 
import ChatIcon from './ChatIcon';



const MainBody = () => {
  return (
    <div className="main-body">
      <div className="full-width-container">
        <div className="content-image-wrapper">

          {/* LEFT SIDE: TEXT CONTENT */}
          <motion.div 
            className="content-container"
            initial={{ opacity: 0, y: 14 }} // translate-y-3.5 (3.5 * 4px = 14px)
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.9,
              ease: [0.4, 0, 0.2, 1], // cubic-bezier easing
            }}
          >
            <h2 className="subtitle">Cruiser</h2>
            <h1 className="title">Go Dutch</h1>

            <div className="explore-section">
              <a href="#" className="nav-button">Explore</a>
              <p className="price">From €2,999</p>
              <a href="#" className="test-ride-link">
                Book a free test ride <ChevronRight className="arrow" size={16} />
              </a>
            </div>

            <div className="features-flex">
              <div className="feature-item">
                <span className="feature-subtitle">Find My Bike</span>
                <span className="feature-title">Theft Detection</span>
              </div>
              <div className="feature-divider"></div>
              <div className="feature-item">
                <span className="feature-subtitle">Custom AdaptivePower™</span>
                <span className="feature-title">Automatic Assistance</span>
              </div>
              <div className="feature-divider"></div>
              <div className="feature-item">
                <span className="feature-subtitle">Servicing Nearby</span>
                <span className="feature-title">200+ Stores</span>
              </div>
            </div>
          </motion.div>

          {/* RIGHT SIDE: IMAGE */}
          <motion.div 
            className="image-container"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.9,
              ease: [0.4, 0, 0.2, 1]
            }}
          >
            <img 
              src="https://www.mobiflip.de/wp-content/uploads/2024/03/cowboy-bike-header.jpg" 
              alt="Bike"
              className="bike-image"
            />
          </motion.div>

        </div>
      </div>
      {/* Cruiser ST Component */}
      <CruiserST />
      {/* Classic Component */}
      <Classic />
      {/* Explore Connect Component */}
       <ExploreConnect />
      {/* Cross Component */}
      <Cross />
      {/* Design Component */}
      <Design />

      {/* CrossST Component */}
      <CrossST />
    {/* Additional Components */}
        <ExploreModel />
        <TakeQuisModel />
       
       <WhyCb />
       <Footer />
       <ChatIcon />
    </div>
    
  );
};

export default MainBody;
