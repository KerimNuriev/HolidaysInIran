import type ScheduleType from './ScheduleType';
import type DayType from '../../days/types/DayType';

type TourType = {
  id: number;
  title: string;
  price_1: number;
  price_2: number;
  days: number;
  image: string;
  shortDescription: string;
  description: string;
  Schedules: ScheduleType[];
  Days: DayType[];
};

export default TourType;
