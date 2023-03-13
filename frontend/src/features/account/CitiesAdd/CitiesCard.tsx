import React from 'react';
import Card from 'react-bootstrap/Card';
import type CityType from '../../cities/types/CityType';

function CitiesCard({ city }: { city: CityType }): JSX.Element {
  return (
    <Card className="city-card">
      <Card.Img src={city.image} alt={city.cityName} />
      <div className="city-background">
        <Card.Title>{city.cityName}</Card.Title>
        <div className="tours-btn">
          <button type="button" className="btn-change">
            Изменить
          </button>
          <button type="button" className="btn-del">
            Удалить
          </button>
        </div>
      </div>
    </Card>
  );
}

export default CitiesCard;
