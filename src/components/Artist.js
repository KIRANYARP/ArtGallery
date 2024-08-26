import React from 'react';
import { ListGroup, Card, Button } from 'react-bootstrap';

const Artist = () => {
  return (
    <Card className="text-center">
      <Card.Header>Featured Artists</Card.Header>
      <Card.Body>
        <Card.Title>Meet the Artists</Card.Title>
        <Card.Text>
          Our gallery is proud to showcase the works of some of the most talented and innovative artists from around the world. Each artist brings a unique perspective and style, contributing to the rich diversity of our collection.
        </Card.Text>
        <ListGroup variant="flush">
          <ListGroup.Item>
            <h5>Amelia Hartwell</h5>
            <p>Known for her vibrant abstract paintings, Amelia explores the intersection of color and emotion. Her work has been featured in galleries across Europe and North America.</p>
          </ListGroup.Item>
          <ListGroup.Item>
            <h5>Leonardo Rossi</h5>
            <p>A contemporary sculptor from Italy, Leonardo's pieces blend classical forms with modern materials. His sculptures evoke a sense of timelessness and serenity.</p>
          </ListGroup.Item>
          <ListGroup.Item>
            <h5>Sakura Tanaka</h5>
            <p>Hailing from Japan, Sakura's intricate ink drawings are inspired by nature and traditional Japanese art. Her delicate and detailed work is a favorite among collectors.</p>
          </ListGroup.Item>
        </ListGroup>
        <Button variant="primary" className="mt-3">Learn More</Button>
      </Card.Body>
    </Card>
  );
};

export default Artist;
