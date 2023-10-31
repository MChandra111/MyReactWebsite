import React from 'react';
import { motion } from "framer-motion"

const icon = {
  hidden: {
    pathLength: 0,
    fill: "rgba(255, 255, 255, 0)"
  },
  visible: {
    pathLength: 1,
    fill: "rgba(255, 255, 255, 1)"
  }
}

function Music() {
  return (
    <div>
      <motion.div
        initial={{ 
          opacity:0,
          x: 50,
        }}
        animate={{ 
          opacity:1,
          x: 0, 
        }}
        transition={{ duration: 2, delay: 0.1 }}
      >
        <img
          className="YTLogo"
          src={"https://clipart.info/images/ccovers/1590430652red-youtube-logo-png-xl.png"}
          style={{
            width: 150,
            height: 106
          }}
        />
        <span className="ChannelName">
          <a href="https://www.youtube.com/@DiosMusicDump" target="_blank" rel="noopener noreferrer">Dio's Music Dump</a>
        </span>
      </motion.div>
    </div>
  );
};

export default Music;