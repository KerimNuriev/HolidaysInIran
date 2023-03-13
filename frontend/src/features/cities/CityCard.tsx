import React from 'react';
import Card from 'react-bootstrap/Card';
import { useTranslation } from 'react-i18next';
import type CityType from './types/CityType';

function CityCard({ city }: { city: CityType }): JSX.Element {
  const { i18n } = useTranslation();

  return (
    <Card className="bg-dark text-white">
      <Card.Img src={city.image} alt={city.cityNameEn} />
      <Card.ImgOverlay>
        <div className="city-background">
          <Card.Title>
            {i18n.language === 'en' ? city.cityNameEn : city.cityNameRu}
          </Card.Title>
          <Card.Text>
            {i18n.language === 'en' ? city.descriptionEn : city.descriptionRu}
          </Card.Text>
        </div>
      </Card.ImgOverlay>
    </Card>
  );
}

export default CityCard;
