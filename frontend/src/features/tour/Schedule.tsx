import React from "react"
import Table from 'react-bootstrap/Table';
import { Link } from "react-router-dom";
import type ScheduleType from "../tours/types/ScheduleType";

function Schedule({schedule, onClick}: {schedule: ScheduleType, onClick: (chosenSchedule: string) => void}): JSX.Element {

const clickHandler = (): void => {
  onClick(`Начало тура  ${schedule.startDay.toString().slice(0,10)}, окончание ${schedule.endDay.toString().slice(0,10)}`)
}
   
  return (

<tr>
          <td>{schedule.startDay.toString().slice(0,10)}</td>
          <td>{schedule.endDay.toString().slice(0,10)}</td>
          <td>{schedule.hasFree}
          {(schedule.hasFree === 'места есть')
          && 
          <button type="button" onClick={clickHandler}> Записаться </button>}</td>
          
        </tr>


  );
}

export default Schedule;