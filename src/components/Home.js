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
        <h3>Web developer who's passionate aboyt coding!</h3>
      </div>
    </div>
    // <header id="home">
    //   <div className="landing">
    //     <div className="home-wrap">
    //       <div className="home-inner">
    //         <img className="d-block w-100" src={sunset} alt="Landing page" />
    //         <div className="caption text-center">
    //           <h1>Yasuko Kurata</h1>
    //           <h3>Web developer who's passionate about coding!</h3>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </header>
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