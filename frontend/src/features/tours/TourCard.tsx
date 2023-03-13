import React from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import type TourType from './types/TourType';
import './TourCard.scss';

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
            <p>От ${tour.price_1}</p>
          </figcaption>
        </figure>
      </Card>
    </Link>
  );
}

export default SwiperTourCard;
