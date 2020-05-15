import React from "react";
import Fade from 'react-reveal/Fade';
import profile from "../image/yasuko-edited.jpg";

// import components
import Navbar from './Navbar';
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";
import Contact from "./Contact";

const colorStyle = {
  background: "#efcbf5",
  backgroundSize: 'cover',
  height: '100vh',
  position: 'relative',
  width: '100%',
  display: 'table',
}

const photoStyle = {
  backgroundImage : `url(${profile})` ,
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
      <div id="home" >
        <div className="container">
          <div className="row">
            <div className="col-lg-6" style={colorStyle}>
              <div className="landing-text">
                <Fade top>
                  <h1 className="mt-5">Yasuko Kurata</h1>
                  <h3>Web developer who's passionate about coding!</h3>
                </Fade>
              </div>
            </div>
            <div className="col-lg-6" style={photoStyle}>
            </div>
          </div>
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