import React from "react";
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
  return (
    <div id="home" style={myStyle}>
      <div className="landing-text">
        <h1>Yasuko Kurata</h1>
        <h3>Web developer who's passionate about coding!</h3>
      </div>
    </div>
  );
};

export default Home;