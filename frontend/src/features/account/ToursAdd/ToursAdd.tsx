/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import type { RootState } from '../../../store';
import ToursCard from './ToursCard';
import './ToursAdd.scss';

function ToursAdd(): JSX.Element {
  const [modal, setModal] = useState(false);
  const [image, setImage] = useState('');
  const [title, setTitle] = useState('');
  const [priceOne, setPriceOne] = useState(0);
  const [priceTwo, setPriceTwo] = useState(0);
  const [days, setDays] = useState(0);
  const [shortDescription, setShortDescription] = useState('');
  const [description, setDescription] = useState('');
  const [startDay, setStartDay] = useState('');
  const [endDay, setEndDay] = useState('');
  const [hasFree, setHasFree] = useState('');

  const handleOpenModal = (): void => {
    setModal((prev) => !prev);
  };

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setImage(e.target.value);
  };

  const handleChangeTitle: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setTitle(e.target.value);
  };
  const handleChangePriceOne: React.ChangeEventHandler<HTMLInputElement> = (
    e,
  ) => {
    setPriceOne(Number(e.target.value));
  };
  const handleChangePriceTwo: React.ChangeEventHandler<HTMLInputElement> = (
    e,
  ) => {
    setPriceTwo(Number(e.target.value));
  };
  const handleChangeDays: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setDays(Number(e.target.value));
  };
  const handleChangeShortDescription: React.ChangeEventHandler<
    HTMLTextAreaElement
  > = (e) => {
    setShortDescription(e.target.value);
  };
  const handleChangeDescription: React.ChangeEventHandler<
    HTMLTextAreaElement
  > = (e) => {
    setDescription(e.target.value);
  };

  const handleChangeStartDay: React.ChangeEventHandler<HTMLInputElement> = (
    e,
  ) => {
    setStartDay(e.target.value);
  };

  const handleChangeEndDay: React.ChangeEventHandler<HTMLInputElement> = (
    e,
  ) => {
    setEndDay(e.target.value);
  };

  const handleChangeSelect: React.ChangeEventHandler<HTMLSelectElement> = (
    e,
  ) => {
    setHasFree(e.target.value);
  };

  const toursList = useSelector((state: RootState) => state.tours.toursList);

  return (
    <>
      <button type="button" onClick={handleOpenModal}>
        Добавить тур
      </button>
      {modal && (
        <div className="add-container">
          <h3>Добавить тур</h3>
          <form>
            <label htmlFor="image">Загрузить картинку</label>
            <input
              id="image"
              type="text"
              name="image"
              value={image}
              onChange={handleChange}
            />
            <label htmlFor="title">Название тура</label>
            <input
              id="title"
              type="text"
              name="title"
              value={title}
              onChange={handleChangeTitle}
            />
            <div className="date-block">
              <div className="date-small-block">
                <label htmlFor="price_1">Цена 1</label>
                <input
                  id="price_1"
                  type="text"
                  name="price_1"
                  value={priceOne}
                  onChange={handleChangePriceOne}
                />
              </div>
              <div className="date-small-block">
                <label htmlFor="price_2">Цена 2</label>
                <input
                  id="price_2"
                  type="text"
                  name="price_2"
                  value={priceTwo}
                  onChange={handleChangePriceTwo}
                />
              </div>
              <div className="date-small-block">
                <label htmlFor="days">Количество дней</label>
                <input
                  id="days"
                  type="text"
                  name="days"
                  value={days}
                  onChange={handleChangeDays}
                />
              </div>
            </div>
            <label htmlFor="shortDescription">Краткое описание тура</label>
            <textarea
              id="shortDescription"
              name="shortDescription"
              rows={2}
              value={shortDescription}
              onChange={handleChangeShortDescription}
            />
            <label htmlFor="description">Описание тура</label>
            <textarea
              id="description"
              name="description"
              rows={4}
              value={description}
              onChange={handleChangeDescription}
            />
            <div className="date-block">
              <div className="date-small-block">
                <label htmlFor="startDay">Начало тура</label>
                <input
                  id="startDay"
                  type="date"
                  name="startDay"
                  value={startDay}
                  onChange={handleChangeStartDay}
                />
              </div>
              <div className="date-small-block">
                <label htmlFor="endDay">Окончание тура</label>
                <input
                  id="endDay"
                  type="date"
                  name="endDay"
                  value={endDay}
                  onChange={handleChangeEndDay}
                />
              </div>
              <div className="date-small-block">
                <label htmlFor="hasFree">Наличие мест</label>
                <select
                  id="hasFree"
                  name="hasFree"
                  value={hasFree}
                  onChange={handleChangeSelect}
                >
                  <option>Места есть</option>
                  <option>Мест нет</option>
                </select>
              </div>
            </div>
            <button type="button" onClick={handleOpenModal}>
              Добавить
            </button>
          </form>
        </div>
      )}
      <div className="tours-block">
        {toursList?.map((tour) => (
          <ToursCard key={tour.id} tour={tour} />
        ))}
      </div>
    </>
  );
}

export default ToursAdd;
