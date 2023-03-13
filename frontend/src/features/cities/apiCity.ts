import type CityType from './types/CityType';
import { CityId } from './types/CityType';

export async function loadCities(): Promise<CityType[]> {
  const res = await fetch('/api/city');
  return res.json();
}

export async function addCities(city: CityType): Promise<CityType> {
  const res = await fetch('/api/city', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      cityNameRu: city.cityNameRu,
      cityNameEn: city.cityNameEn,
      image: city.image,
      descriptionRu: city.descriptionRu,
      descriptionEn: city.descriptionEn,
    }),
  });
  return res.json();
}

export async function deleteCity(id: CityId): Promise<void> {
  await fetch(`/api/city/${id}`, {
    method: 'DELETE',
  });
}
