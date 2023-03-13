import React  from 'react'
import Card from 'react-bootstrap/Card';
import { useAppDispatch } from '../../store';
import { chooseDay } from './daysSlice';
import type DayType from './types/DayType';

function DayCard({ day }: { day: DayType }): JSX.Element{

const dispatch = useAppDispatch()

const clickHandler: React.MouseEventHandler<HTMLElement> = (event) => {
  event.preventDefault();
  dispatch(chooseDay({id: day.id}))
}

  return (
    <Card onClick={clickHandler} style={{width: '400px', height: '250px'}} >
      <Card.Img style={{width: '400px', height: '250px'}} src={day.image} alt="Card image"/>
      <Card.ImgOverlay>
        
        <Card.Title style={{color: "black"}}>День: {day.number_day}</Card.Title>
        <br></br>

        <Card.Text style={{color: "black"}}>{day.title_city}</Card.Text>
        
      </Card.ImgOverlay>
    </Card>
  );
}

export default DayCard;