import React from 'react';
import Card from 'react-bootstrap/Card';
import type TourType from '../tours/types/TourType';
import './Tour.scss'

function TourInfo({oneTour}: {oneTour: TourType}): JSX.Element {


  return (
    <Card className="text-center dayInfo">
      <Card.Body>
        <Card.Title>{oneTour.title}</Card.Title>
        <Card.Text>
          {oneTour.description}
        </Card.Text>
        <br></br>
        <Card.Text>`Стоимость за одноместный номер ${oneTour.price_1}` </Card.Text>
        <Card.Text>`Стоимость за двухместный номер ${oneTour.price_2}` </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default TourInfo;