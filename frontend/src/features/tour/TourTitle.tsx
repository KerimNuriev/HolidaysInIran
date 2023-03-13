import React from 'react';
import Card from 'react-bootstrap/Card';
import type TourType from '../tours/types/TourType';
import './Tour.scss'



function TourTitle({ oneTour }: { oneTour: TourType }): JSX.Element {
  return (
    <Card className="tourTitleCard bg-dark text-white">
      <Card.Img className="tourImg"src={oneTour.image} alt="Card image" />
      <Card.ImgOverlay>
        <div className="city-background">
          <Card.Title className="tourTitle">{oneTour.title}</Card.Title>
        </div>
      </Card.ImgOverlay>
    </Card>
  );
}

export default TourTitle;