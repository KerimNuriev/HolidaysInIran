import React from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import type City from './types/CityType';

function SwiperCityCard({ city }: { city: City }): JSX.Element {
  return (
    <Card className="bg-dark text-white">
      <Card.Img src={city.image} alt={city.cityName} />
      <Card.ImgOverlay>
        <Link className="city-link" to="/">
          <div className="city-background">
            <Card.Title>{city.cityName}</Card.Title>
            <Card.Text>{city.description}</Card.Text>
          </div>
        </Link>
      </Card.ImgOverlay>
    </Card>
  );
}

export default SwiperCityCard;
