import React from "react"
import Table from 'react-bootstrap/Table';
import { Link } from "react-router-dom";
import type ScheduleType from "../tours/types/ScheduleType";
import Schedule from "./Schedule";

function Schedules({schedules, onClick}: {schedules: ScheduleType[], onClick: (chosenSchedule: string) => void}): JSX.Element {

   
  return (
    <Table className="scheduleTable" striped bordered hover variant="dark" size="sm">
      <thead>
        <tr>
          <th>Начало</th>
          <th>Конец</th>
          <th>Свободные места</th>
        </tr>
      </thead>
      <tbody>
        {schedules?.map(schedule => <Schedule key={schedule.id} onClick={onClick} schedule={schedule}/>)}

      </tbody>
    </Table>
  );
}

export default Schedules;

