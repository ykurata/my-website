import React from "react";
import sunset from '../image/sunset-2.jpg';

const Home = () => {
  return (
    <header id="home">
      <div className="landing">
        <div className="home-wrap">
          <div className="home-inner">
            <img className="d-block w-100" src={sunset} alt="Landing page" />
          </div>
        </div>
      </div>
      <div className="caption text-center">
        <h1>Yasuko Kurata</h1>
        <h3>Web developer who's passionate about coding!</h3>
      </div>
    </header>
    // <div id="home" className="carousel slide" data-ride="carousel">
    //   <div className="carousel-inner">
    //     <div className="carousel-item active">
    //       <img className="d-block w-100" src={sunset} alt="First slide" />
    //       <div className="carousel-caption">
    //         <h1 className="display-2">Yasuko Kurata</h1>
    //         <h3>Web developer who's passionate about coding!</h3>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};

export default Home;