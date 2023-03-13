/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import type { RootState } from '../../../store';
import { useAppDispatch } from '../../../store';
import CitiesCard from './CitiesCard';
import * as api from '../../cities/apiCity';
import './CitiesAdd.scss';
import { addCities, deleteCity } from '../../cities/citiesSlice';
import type { CityId } from '../../cities/types/CityType';

function CityAdd(): JSX.Element {
  const [modal, setModal] = useState(false);
  const [image, setImage] = useState('');
  const [cityNameRu, setCityNameRu] = useState('');
  const [cityNameEn, setCityNameEn] = useState('');
  const [descriptionRu, setDescriptionRu] = useState('');
  const [descriptionEn, setDescriptionEn] = useState('');
  const dispatch = useAppDispatch();

  const handleOpenModal = (): void => {
    setModal((prev) => !prev);
  };
  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setImage(e.target.value);
  };
  const handleChangeCityNameRu: React.ChangeEventHandler<HTMLInputElement> = (
    e,
  ) => {
    setCityNameRu(e.target.value);
  };
  const handleChangeCityNameEn: React.ChangeEventHandler<HTMLInputElement> = (
    e,
  ) => {
    setCityNameEn(e.target.value);
  };
  const handleChangeDescriptionRu: React.ChangeEventHandler<
    HTMLTextAreaElement
  > = (e) => {
    setDescriptionRu(e.target.value);
  };
  const handleChangeDescriptionEn: React.ChangeEventHandler<
    HTMLTextAreaElement
  > = (e) => {
    setDescriptionEn(e.target.value);
  };

  const citiesList = useSelector((state: RootState) => state.cities.citiesList);

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e): void => {
    e.preventDefault();
    const city = {
      id: 1,
      cityNameRu,
      cityNameEn,
      image,
      descriptionRu,
      descriptionEn,
    };
    dispatch(addCities(city));
    setModal((prev) => !prev);
    setImage('');
    setCityNameRu('');
    setCityNameEn('');
    setDescriptionRu('');
    setDescriptionEn('');
  };

  const handleCityRemove = React.useCallback(
    (id: CityId) => {
      dispatch(deleteCity(id));
    },
    [dispatch],
  );
  return (
    <>
      <button type="button" onClick={handleOpenModal}>
        Добавить город
      </button>
      {modal && (
        <div className="add-container">
          <h3>Добавить город</h3>
          <form onSubmit={handleSubmit}>
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
            <label htmlFor="cityNameRu">Название города</label>
            <input
              id="cityNameRu"
              type="text"
              name="cityNameRu"
              value={cityNameRu}
              onChange={handleChangeCityNameRu}
            />
            <label htmlFor="cityNameEn">Название города на английском</label>
            <input
              id="cityNameEn"
              type="text"
              name="cityNameEn"
              value={cityNameEn}
              onChange={handleChangeCityNameEn}
            />
            <label htmlFor="description">Описание города</label>
            <textarea
              id="description"
              name="description"
              rows={4}
              value={descriptionRu}
              onChange={handleChangeDescriptionRu}
            />
            <label htmlFor="descriptionEn">Описание города на английском</label>
            <textarea
              id="descriptionEn"
              name="descriptionEn"
              rows={4}
              value={descriptionEn}
              onChange={handleChangeDescriptionEn}
            />
            <button type="submit">Добавить</button>
          </form>
        </div>
      )}
      <div className="tours-block">
        {citiesList?.map((city) => (
          <CitiesCard key={city.id} city={city} onRemove={handleCityRemove} />
        ))}
      </div>
    </>
  );
}

export default CityAdd;
