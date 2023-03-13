import type PhotoType from './types/PhotoType';

// eslint-disable-next-line import/prefer-default-export
export async function loadPhoto(): Promise<PhotoType[]> {
  const res = await fetch('/api/photo');
  return res.json();
}
