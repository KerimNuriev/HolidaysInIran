type CityType = {
  id: number;
  cityNameRu: string;
  cityNameEn: string;
  descriptionRu: string;
  descriptionEn: string;
  image: string;
};

export default CityType;

export type CityId = CityType['id'];
