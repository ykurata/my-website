import React from "react";
import Fade from 'react-reveal/Fade';
import sunset from '../image/sunset-2.jpg';

// import components
import Navbar from './Navbar';
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";
import Contact from "./Contact";

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
    <div>
      <Navbar />
      <div id="home" style={myStyle}>
        <div className="landing-text">
          <Fade top>
            <h1>Yasuko Kurata</h1>
            <h3>Web developer who's passionate about coding!</h3>
          </Fade>
        </div>
      </div>
      <About/>
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
};

export default Home;