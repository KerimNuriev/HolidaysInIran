import React, { memo, useCallback, useState } from 'react';
import { useSelector } from 'react-redux';
import type { RootState} from '../../store';
import { useAppDispatch } from '../../store';
import { loadApplication } from './TourFormSlice';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import type { RootState } from '../../../store';
import './ToursForm.scss'

function ToursForm({defaultSchedule}: {defaultSchedule: string | undefined}): JSX.Element {
  const dispatch = useAppDispatch();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [tour, setTour] = useState('')
  const [phone, setPhone] = useState('');
  const [date, setDate] = useState('');
  const [connection, setConnection] = useState('');
  
  const loading = useSelector((state: RootState) => state.toursForm.loading);
  const loadError = useSelector((state: RootState) => state.toursForm.loadError);
  
  
    // Все данные с инпутов и селектов приходят сюда по нажатию
  const handleSubmitForm = useCallback(async (event: React.FormEvent): Promise<void> => {
    event.preventDefault();
    const application = {loading, name, email, phone, tour, date, connection}
    const result = await dispatch(loadApplication({application}));
    console.log(loadError);
    if (loadApplication.fulfilled.match(result)) {
      console.log(loadError);
    }
    
    }, [connection, date, dispatch, email, loadError, loading, name, phone, tour])

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


// для условного рендеринга доступных туров и автозаполнения дат
const tours = useSelector((state: RootState) => state.tours.toursList)
const { id } = useParams()
const [oneTour] = tours.filter((el) => el.id === Number(id))

  return (
    <div className="application">
      <div className="form-overlay">
        <div className="form-container">
          <h3>Оформите заявку на тур</h3>
          {loadError &&
            (<div className="form"> 
             <span style={{ color: 'red' }}>{loadError}</span>
            </div>)}
          <form className="form" onSubmit={handleSubmitForm}>
            <input type="text" value={name} onChange={handleChangeName} placeholder="Ваше имя" />
            <input type="email" value={email} onChange={handleChangeEmail} placeholder="Ваша email" />
            <input type="text" maxLength={12} value={phone} onChange={handleChangePhone} placeholder="Ваш телефон +7" />
            <select style={{marginBottom: 10}} value={tour} onChange={handleChangeTour}>
            {id ?
             (<option defaultValue={oneTour.title}>{oneTour.title}</option>)
             : <>
            (<option defaultValue="Выберите желаемый тур">Выберите желаемый тур</option>
            {tours?.map((el) => <option key={el.id}> {el.title} </option>)})
            </>
             }
            </select>
            <select value={connection} onChange={handleChangeConnection}>
            <option disabled defaultValue="Как с вами можно связаться">Как с вами можно связаться</option>
            <option>По почте</option>
            <option>По телефону</option>
            </select>
            {defaultSchedule? 
            <input type="text" defaultValue={defaultSchedule}  onChange={handleChangeDate} />
             : 
            <input type="text" value={date} onChange={handleChangeDate} placeholder="Желаемые даты" />
             }
            
            <button type="submit">Отправить</button>
          </form>
        </div>
  
      </div>
    </div>
  );
}

export default memo(ToursForm);
