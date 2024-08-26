import React from 'react';
import './Home.css';  // Import custom CSS for styling

const Home = () => {
  return (
    <div className="home-container">
      <div className="content">
        <h1 className="display-4">Welcome to Phoenix Art Gallery</h1>
        <p className="lead">A sanctuary for art lovers, where creativity meets inspiration.</p>
        <hr className="my-4" />
        <p>
          At Phoenix Art Gallery, we celebrate the fusion of modern and classic art forms. 
          Our collection features masterpieces from renowned artists around the world, offering 
          a rich and immersive experience.
        </p>
        <p className="font-italic">"Art is not what you see, but what you make others see." – Edgar Degas</p>
        <p>Click on the navigation links to explore more.</p>
      </div>
    </div>
  );
};

export default Home;
