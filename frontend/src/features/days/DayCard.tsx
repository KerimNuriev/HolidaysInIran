import React  from 'react'
import Card from 'react-bootstrap/Card';
import type DayType from './types/DayType';

function DayCard({ day }: { day: DayType }): JSX.Element{
 
  return (
    <Card style={{width: '15rem'}} >
      <Card.Img src={day.image} alt="Card image"/>
      <Card.ImgOverlay>
      {day.number_day} день:
        <Card.Title>{day.title_city}</Card.Title>
        {day.shortDescription}
      </Card.ImgOverlay>
    </Card>
  );
}

export default DayCard;