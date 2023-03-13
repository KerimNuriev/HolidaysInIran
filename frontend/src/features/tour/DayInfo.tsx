import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import type DayType from '../days/types/DayType';
import './Tour.scss'

function DayInfo({day}: {day: DayType | undefined}): JSX.Element {


  return (
    <Card className="text-center dayInfo">
      <Card.Header>`День {day?.number_day}`</Card.Header>
      <Card.Body>
        <Card.Title>{day?.title_city}</Card.Title>
        <Card.Text>
          {day?.shortDescription}{' '}
          {day?.description}
        </Card.Text>
        <Button variant="primary">Следующий</Button>
      </Card.Body>
    </Card>
  );
}

export default DayInfo;