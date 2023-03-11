import React, {memo, useCallback, useState} from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'

function FormApplication(): JSX.Element {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [tour, setTour] = useState('')
    const [phone, setPhone] = useState('');
    const [date, setDate] = useState('');
    const [connection, setConnection] = useState('');

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
    <Form style={{margin: '10px 100px', width: 500}} onSubmit={handleSubmitForm}>
      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Control type="name" value={name} onChange={handleChangeName} placeholder="Ваше имя"/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Control type="phone" value={phone} onChange={handleChangePhone} placeholder="Ваш номер +7" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control type="email" value={email} onChange={handleChangeEmail} placeholder="Ваша почта" />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Какой тур вам интересен</Form.Label>
        <Form.Select value={tour} onChange={handleChangeTour}>
          <option>Тур на 8 дней</option>
          <option>Тур на 10 дней</option>
        </Form.Select>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Желаемые даты</Form.Label>
        <Form.Control type="text" value={date} onChange={handleChangeDate} placeholder="" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicText">
        <Form.Label>Как можно с вами связаться</Form.Label>
        <Form.Select value={connection} onChange={handleChangeConnection}>
          <option>По телефону</option>
          <option>По почте</option>
        </Form.Select>
      </Form.Group>


      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default memo(FormApplication);