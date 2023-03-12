import React, { memo, useCallback, useState } from 'react';
import { useAppDispatch } from '../../store';
import { applic } from './TourFormSlice';
import './ToursForm.scss'
import type FormApplicationType from './types/FormApplicationType';

function ToursForm(): JSX.Element {
  const dispatch = useAppDispatch();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [tour, setTour] = useState('')
  const [phone, setPhone] = useState('');
  const [date, setDate] = useState('');
  const [connection, setConnection] = useState('');
  const [susses, setSusses] = useState(false);
  const [erorr, setErorr] = useState(false);
  
    // Все данные с инпутов и селектов приходят сюда по нажатию
  const handleSubmitForm = useCallback(async (event: React.FormEvent<Element>) => {
    event.preventDefault();
    const application = {name, email, phone, tour, date, connection}
    const result = await dispatch(applic(application))
    if (result.payload === 'susses') {
      setSusses((prev)=> !prev)
      setName('')
      setEmail('')
      setPhone('')
      setDate('')
      setConnection('')
      setTour('')
    } else {
      setErorr((prev)=> !prev)
    }
    
    }, [connection, date, dispatch, email, name, phone, tour])

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
            <input type="text" value={name} onChange={handleChangeName} placeholder="Ваше имя" />
            <input type="email" value={email} onChange={handleChangeEmail} placeholder="Ваша email" />
            <input type="text" maxLength={12} value={phone} onChange={handleChangePhone} placeholder="Ваш телефон +7" />
            <select style={{marginBottom: 10}} value={tour} onChange={handleChangeTour}>
            <option disabled defaultValue="Выбирете желаемый тур">Выбирете желаемый тур</option>
            <option>8 дней 7 ночей</option>
            <option>10 дней 9 ночей</option>
            </select>
            <select value={connection} onChange={handleChangeConnection}>
            <option disabled defaultValue="Как с вами можно связаться">Как с вами можно связаться</option>
            <option>По почте</option>
            <option>По телефону</option>
            </select>
            <input type="text" value={date} onChange={handleChangeDate} placeholder="Желаемые даты" />
            <button type="submit">Отправить</button>
            {susses && 
            <div className="form">
              <h3>Заявка успешно отправлена</h3>
              <button type="button" onClick={() => setSusses((prev)=> !prev)}>Ok</button>
            </div>}
            {erorr && 
            <div className="form">
              <h3>Заполните все поля!</h3>
              <button type="button" onClick={() => setErorr((prev)=> !prev)}>Ok</button>
            </div>}
          </form>
        </div>
      </div>
    </div>
  );
}

export default memo(ToursForm);
