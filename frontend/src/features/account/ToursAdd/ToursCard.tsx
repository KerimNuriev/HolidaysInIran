import React from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import type TourType from '../../tours/types/TourType';

function ToursCard({ tour }: { tour: TourType }): JSX.Element {
  return (
    // <Card className="tours-item">
    //   <Link className="tours-link" key={tour.id} to={`/tour/${tour.id}`}>
    //     <figure className="tours-figure">
    //       <div className="tours-img">
    //         <Card.Img src={tour.image} alt={tour.title} />
    //       </div>
    //       <figcaption>
    //         <h3>{tour.title}</h3>
    //         <p>${tour.price_2}</p>
    //         {/* <p>{tour.shortDescription}</p> */}
    //         {/* {tour.Schedules?.map((schedule) => (
    //           <div key={schedule.id}>
    //             Начало тура {schedule.startDay.toString().slice(0, 10)} -
    //             окончание {schedule.endDay.toString().slice(0, 10)}. Статус:{' '}
    //             {schedule.hasFree}
    //           </div>
    //         ))} */}
    //       </figcaption>
    //     </figure>
    //   </Link>
    //   <div className="tours-btn">
    //     <button type="button" className="btn-change">
    //       Изменить
    //     </button>
    //     <button type="button" className="btn-del">
    //       Удалить
    //     </button>
    //   </div>
    // </Card>

    <Card className="city-card">
      <Link className="tours-link" key={tour.id} to={`/tour/${tour.id}`}>
        <div className="tours-img">
          <Card.Img src={tour.image} alt={tour.title} />
        </div>
      </Link>
      <div className="city-background">
        <Link className="tours-link" key={tour.id} to={`/tour/${tour.id}`}>
          <Card.Title>{tour.title}</Card.Title>
        </Link>
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

export default ToursCard;
