import React from 'react';
import { Carousel } from 'react-bootstrap';
import exhibition1 from '../assets/exhibition1.jpg';  // Importing images
import exhibition2 from '../assets/exhibition2.jpg';

const Exhibition = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img className="d-block w-100" src={exhibition2} alt="First slide" />
        <Carousel.Caption>
          <h3>Student Art Exhibition</h3>
          <p>Place-CHENNAI</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={exhibition1} alt="Second slide" />
        <Carousel.Caption>
          <h3>Abstract Art Exhibition</h3>
          <p>Place-BANGALORE</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Exhibition;
