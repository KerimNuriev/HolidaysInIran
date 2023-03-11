import type TourType from "./types/TourType";

export async function loadTours(): Promise<TourType[]> {
    const res = await fetch('/api/tour');
    return res.json();
  }