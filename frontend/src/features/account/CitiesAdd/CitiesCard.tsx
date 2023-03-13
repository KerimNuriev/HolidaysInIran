import React from 'react';
import Card from 'react-bootstrap/Card';
import type CityType from '../../cities/types/CityType';
import type { CityId } from '../../cities/types/CityType';

function CitiesCard({
  city,
  onRemove,
}: {
  city: CityType;
  onRemove: (cityId: CityId) => void;
}): JSX.Element {
  const handleRemove = React.useCallback(
    (event: React.MouseEvent) => {
      event.stopPropagation();
      event.preventDefault();
      onRemove(city.id);
    },
    [city, onRemove],
  );

  return (
    <Card className="city-card">
      <Card.Img src={city.image} alt={city.cityNameEn} />
      <div className="city-background">
        <Card.Title>{city.cityNameRu}</Card.Title>
        <div className="tours-btn">
          <button type="button" className="btn-change">
            Изменить
          </button>
          <button type="button" onClick={handleRemove} className="btn-del">
            Удалить
          </button>
        </div>
      </div>
    </Card>
  );
}

export default CitiesCard;
