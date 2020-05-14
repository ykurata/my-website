import React from "react";
import {useSpring, animated, config} from 'react-spring';

import sunset from '../image/sunset-2.jpg';

const myStyle = {
  backgroundImage : `url(${sunset})` ,
  backgroundSize: 'cover',
  height: '100vh',
  position: 'relative',
  width: '100%',
  display: 'table'
}

const Home = () => {
  const props = useSpring({ 
    from: {opacity: 0, marginTop: -500 }, 
    to: {opacity: 1, marginTop: 0},
    delay: 500,
    config: config.slow
  })
  return (
    <div id="home" style={myStyle}>
      <animated.div style={props} className="landing-text">
        <h1>Yasuko Kurata</h1>
        <h3>Web developer who's passionate about coding!</h3>
      </animated.div>
    </div>
  );
};

export default Home;