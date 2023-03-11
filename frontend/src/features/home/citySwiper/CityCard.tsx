import React from 'react';
import Card from 'react-bootstrap/Card';
import type CityType from './types/CityType';

function SwiperCityCard ({city}: {city: CityType}): JSX.Element {
  return (
    <Card className="bg-dark text-white">
      <Card.Img src={city.image} alt="Card image" />
      <Card.ImgOverlay>
        <Card.Title>{city.cityName}</Card.Title>
        <Card.Text>
          {city.description}
        </Card.Text>
      </Card.ImgOverlay>
    </Card>
  );
}

export default SwiperCityCard;