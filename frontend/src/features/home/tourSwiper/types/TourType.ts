
type TourType = {
    id: number;
    title: string;
    price_1: number;
    price_2: number;
    days: number;
    image: string;
    shortDescription: string;
    description: string;
    schedule: Schedule[];
    days: Day[];
}

export default TourType;