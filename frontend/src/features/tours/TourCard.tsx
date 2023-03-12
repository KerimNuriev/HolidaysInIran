import React from 'react';
import Card from 'react-bootstrap/Card';
import type TourType from './types/TourType';

function SwiperTourCard({ tour }: { tour: TourType }): JSX.Element {
  return (
    <Card className="bg-dark text-white">
      <Card.Img src={tour.image} alt="Card image" />
      <Card.ImgOverlay>
        <Card.Title>{tour.title}</Card.Title>
        <Card.Text>{tour.shortDescription}</Card.Text>
        {tour.Schedules?.map((schedule) => (
          <div key={schedule.id}>
            Начало тура {schedule.startDay.toString().slice(0, 10)} - окончание{' '}
            {schedule.endDay.toString().slice(0, 10)}. Статус:{' '}
            {schedule.hasFree}
          </div>
        ))}
      </Card.ImgOverlay>
    </Card>
  );
}

export default SwiperTourCard;
