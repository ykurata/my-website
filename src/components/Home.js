import React from "react";
import Fade from "react-reveal/Fade";
import profile from "../image/yasuko_crop9.jpg";

const homeStyles = {
  backgroundImage: `url(${profile})`,
  backgroundSize: "cover",
  height: "100vh",
  width: "100%",
  position: "relative",
  display: "table",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center right",
  backgroundAttachment: "fixed",
};

const Home = () => {
  return (
    <div>
      <section id="home" style={homeStyles}>
        <div className="landing-text">
          <Fade top>
            <h1>Yasuko Kurata</h1>
            <h3>Web developer who's passionate about coding</h3>
          </Fade>
        </div>
      </section>
    </div>
  );
};

export default Home;
