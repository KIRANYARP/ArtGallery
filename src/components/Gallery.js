// src/components/Gallery.js

import React, { Component } from 'react';
import { Card, Button, CardGroup } from 'react-bootstrap';
import art1 from '../assets/art1.jpeg';
import art2 from '../assets/art2.jpg';
import art3 from '../assets/art3.jpg';
import GalleryForm from './GalleryForm'; // Import the GalleryForm component

class Gallery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      artworks: [
        {
          id: 1,
          title: 'Human Face Abstract',
          imageUrl: art1,
          description: 'A mesmerizing abstract interpretation of the human face, blending emotions with vibrant colors and dynamic brush strokes.',
        },
        {
          id: 2,
          title: 'Flow of Colors',
          imageUrl: art2,
          description: 'An abstract piece capturing the natural flow of colors, representing the fluidity and unpredictability of life.',
        },
        {
          id: 3,
          title: 'Geometric Harmony',
          imageUrl: art3,
          description: 'An exploration of shapes and forms, this artwork presents a harmonious balance of geometry in an abstract setting.',
        },
      ],
      showForm: false, // State to control form visibility
    };
  }

  handleMouseEnter = (e) => {
    e.target.style.transform = 'scale(1.1)';
  };

  handleMouseLeave = (e) => {
    e.target.style.transform = 'scale(1)';
  };

  handleFormSubmit = (formData) => {
    this.setState((prevState) => ({
      artworks: [
        ...prevState.artworks,
        {
          id: prevState.artworks.length + 1,
          title: formData.title,
          imageUrl: formData.imageUrl,
          description: formData.description,
        },
      ],
      showForm: false, // Hide form after submission
    }));
  };

  toggleForm = () => {
    this.setState((prevState) => ({
      showForm: !prevState.showForm,
    }));
  };

  render() {
    return (
      <div>
        <Button variant="primary" onClick={this.toggleForm} className="mb-3">
          {this.state.showForm ? 'Cancel' : 'Add New Artwork'}
        </Button>
        {this.state.showForm && <GalleryForm onSubmit={this.handleFormSubmit} />}
        <CardGroup>
          {this.state.artworks.map((art) => (
            <Card key={art.id} className="m-2">
              <Card.Img
                variant="top"
                src={art.imageUrl}
                alt={art.title}
                onMouseEnter={this.handleMouseEnter}
                onMouseLeave={this.handleMouseLeave}
              />
              <Card.Body>
                <Card.Title>{art.title}</Card.Title>
                <Card.Text>{art.description}</Card.Text>
                <Button variant="primary">View Details</Button>
              </Card.Body>
            </Card>
          ))}
        </CardGroup>
      </div>
    );
  }
}

export default Gallery;
