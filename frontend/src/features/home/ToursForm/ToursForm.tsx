import React, { memo, useCallback, useState } from 'react';
import './ToursForm.scss';

function ToursForm(): JSX.Element {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [tour, setTour] = useState('')
  const [phone, setPhone] = useState('');
  const [date, setDate] = useState('');
  const [connection, setConnection] = useState('');

    // Все данные с инпутов и селектов приходят сюда по нажатию
  const handleSubmitForm: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    console.log(name);
    console.log(email);
    console.log(phone);
    console.log(date);
    console.log(tour);
    console.log(connection);
}

  const handleChangeName: React.ChangeEventHandler<HTMLInputElement> = useCallback((event): void => {
    setName(event.target.value)
}, [])

const handleChangePhone: React.ChangeEventHandler<HTMLInputElement> = useCallback((event): void => {
    setPhone(event.target.value)
}, [])

const handleChangeEmail: React.ChangeEventHandler<HTMLInputElement> = useCallback((event): void => {
    setEmail(event.target.value)
}, [])

const handleChangeTour: React.ChangeEventHandler<HTMLSelectElement> = useCallback((event): void => {
    setTour(event.target.value)
}, [])

const handleChangeDate: React.ChangeEventHandler<HTMLInputElement> = useCallback((event): void => {
    setDate(event.target.value)
}, [])

const handleChangeConnection: React.ChangeEventHandler<HTMLSelectElement> = useCallback((event): void => {
    setConnection(event.target.value)
}, [])

  return (
    <div className="application">
      <div className="form-overlay">
        <div className="form-container">
          <h3>Оформите заявку на тур</h3>
          <form className="form" onSubmit={handleSubmitForm}>
            <input type="name" value={name} onChange={handleChangeName} placeholder="Ваше имя" />
            <input type="email" value={email} onChange={handleChangeEmail} placeholder="Ваша email" />
            <input type="phone" value={phone} onChange={handleChangePhone} placeholder="Ваш телефон +7" />
            <select style={{marginBottom: 10}} value={tour} onChange={handleChangeTour}>
            <option defaultValue="Выбирете желаемый тур">Выбирете желаемый тур</option>
            <option>8 дней 7 ночей</option>
            <option>10 дней 9 ночей</option>
            </select>
            <select value={connection} onChange={handleChangeConnection}>
            <option defaultValue="Как с вами можно связаться">Как с вами можно связаться</option>
            <option>По почте</option>
            <option>По телефону</option>
            </select>
            <input type="text" value={date} onChange={handleChangeDate} placeholder="Желаемые даты" />
            <button type="submit">Отправить</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default memo(ToursForm);
