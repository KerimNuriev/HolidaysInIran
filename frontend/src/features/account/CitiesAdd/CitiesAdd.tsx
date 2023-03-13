/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import type { RootState } from '../../../store';
import CitiesCard from './CitiesCard';
import './CitiesAdd.scss';

function CityAdd(): JSX.Element {
  const [modal, setModal] = useState(false);
  const [image, setImage] = useState('');
  const [cityName, setCityName] = useState('');
  const [description, setDescription] = useState('');

  const handleOpenModal = (): void => {
    setModal((prev) => !prev);
  };
  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setImage(e.target.value);
  };
  const handleChangeCityName: React.ChangeEventHandler<HTMLInputElement> = (
    e,
  ) => {
    setCityName(e.target.value);
  };
  const handleChangeDescription: React.ChangeEventHandler<
    HTMLTextAreaElement
  > = (e) => {
    setDescription(e.target.value);
  };

  const citiesList = useSelector((state: RootState) => state.cities.citiesList);

  return (
    <>
      <button type="button" onClick={handleOpenModal}>
        Добавить город
      </button>
      {modal && (
        <div className="add-container">
          <h3>Добавить город</h3>
          <form>
            <label htmlFor="image">
              Загрузить картинку <span>* разрешение 1920 x 760 пикселей</span>
            </label>
            <input
              id="image"
              type="text"
              name="image"
              value={image}
              onChange={handleChange}
            />
            <label htmlFor="cityName">Название города</label>
            <input
              id="cityName"
              type="text"
              name="cityName"
              value={cityName}
              onChange={handleChangeCityName}
            />
            <label htmlFor="description">Описание города</label>
            <textarea
              id="description"
              name="description"
              rows={4}
              value={description}
              onChange={handleChangeDescription}
            />
            <button type="button" onClick={handleOpenModal}>
              Добавить
            </button>
          </form>
        </div>
      )}
      <div className="tours-block">
        {citiesList?.map((city) => (
          <CitiesCard key={city.id} city={city} />
        ))}
      </div>
    </>
  );
}

export default CityAdd;
