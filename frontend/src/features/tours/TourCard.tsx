import React from 'react';
import Card from 'react-bootstrap/Card';
import type TourType from './types/TourType';
import './TourCard.scss';
import { Link } from 'react-router-dom';

function SwiperTourCard({ tour }: { tour: TourType }): JSX.Element {
  return (
    <Link key={tour.id} to={`/tour/${tour.id}`}>
      <Card className="tours__item">
        <figure className="tours__figure">
          <div className="tours__img">
            <Card.Img src={tour.image} alt={tour.title} />
          </div>
          <figcaption>
            <h3>{tour.title}</h3>
            <p>${tour.price_2}</p>
            {/* <p>{tour.shortDescription}</p> */}
            {/* {tour.Schedules?.map((schedule) => (
              <div key={schedule.id}>
                Начало тура {schedule.startDay.toString().slice(0, 10)} -
                окончание {schedule.endDay.toString().slice(0, 10)}. Статус:{' '}
                {schedule.hasFree}
              </div>
            ))} */}
          </figcaption>
        </figure>
      </Card>
    </Link>
  );
}

export default SwiperTourCard;
