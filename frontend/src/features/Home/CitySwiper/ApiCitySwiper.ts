import type City from "./types/CityType";

export async function loadCities(): Promise<City[]> {
    const res = await fetch('/api/city');
    return res.json();
  }

