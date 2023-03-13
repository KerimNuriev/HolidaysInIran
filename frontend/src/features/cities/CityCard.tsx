import React from 'react';
import Card from 'react-bootstrap/Card';
import type CityType from './types/CityType';

function CityCard({ city }: { city: CityType }): JSX.Element {
  return (
    <Card className="bg-dark text-white">
      <Card.Img src={city.image} alt={city.cityName} />
      <Card.ImgOverlay>
        <div className="city-background">
          <Card.Title>{city.cityName}</Card.Title>
          <Card.Text>{city.description}</Card.Text>
        </div>
      </Card.ImgOverlay>
    </Card>
  );
}

export default CityCard;
