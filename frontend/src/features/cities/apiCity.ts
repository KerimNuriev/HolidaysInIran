import type CityType from "./types/CityType";

export async function loadCities(): Promise<CityType[]> {
    const res = await fetch('/api/city');
    return res.json();
  }

