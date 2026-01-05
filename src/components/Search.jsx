
import "./styles/search.css";
import RecentSearch from "./common/RecentSearch";
import { motion, AnimatePresence } from "framer-motion";
import React, { useState } from 'react'

const backdropVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  exit: { opacity: 0 },
};

const modalVariants = {
  hidden: { opacity: 0, scale: 0.9, y: 40 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.35,
      ease: "easeOut",
    },
  },
  exit: {
    opacity: 0,
    scale: 0.9,
    y: 40,
    transition: {
      duration: 0.25,
      ease: "easeIn",
    },
  },
};

const Search = ({ onClose, isOpen }) => {
   const [showAi , setShowAi] = useState(false);
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="Search"
          variants={backdropVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <motion.div
            className="wrapperSearch"
            variants={modalVariants}
          >
            <section>
              <button className="closeBtn" onClick={onClose}>
                <i className="bi bi-x"></i>
              </button>

              <h1 className="heading">Search</h1>

              <div className="items">
                <div className="item">
                  <div className="headers">
                    <div className="searchBar">
                      <i className="bi bi-search"></i>
                      <input type="text" placeholder="Search Here..." />
                    </div>
                  </div>

                  <div className="main">
                    <h2 className="exploreTitle">Explore</h2>

                    <div className="exploreGrid">
                      <div className="exploreCard">3D</div>
                      <div className="exploreCard">Events</div>
                      <div className="exploreCard">Ask AI</div>
                      <div className="exploreCard">Explore by Region</div>
                      <div className="exploreCard">Exploration & Discovery</div>
                      <div className="exploreCard">Architecture & Knowledge</div>
                      <div className="exploreCard">Culture, People & Life</div>
                      <div className="exploreCard">Stories & Legends</div>
                      <div className="exploreCard">Gallery</div>
                    </div>
                  </div>
                </div>

                <RecentSearch />
              </div>
            </section>
          </motion.div>
        </motion.div>
      )}
       {showAi && ( <Ai isOpen={showAi} onClose={()=>setShowAi(false)}/>)}
    </AnimatePresence>
  );
};

export default Search;
