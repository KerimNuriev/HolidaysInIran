import React, { useState, useCallback } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import type { RootState } from '../../store';
import { useAppDispatch } from '../../store';
import { login, resetLoginFormError } from './adminSlice';

function FormAuth(): JSX.Element {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const error = useSelector((state: RootState) => state.admin.loginFormError);

  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  const handleNameChange = React.useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setUserName(event.target.value);
      dispatch(resetLoginFormError());
    },
    [],
  );

  const handlePasswordChange = React.useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setPassword(event.target.value);
      dispatch(resetLoginFormError());
    },
    [],
  );

  const handleSubmit = React.useCallback(
    async (event: React.FormEvent) => {
      event.preventDefault();

      const dispatchResult = await dispatch(
        login({
          userName,
          password,
        }),
      );

      if (login.fulfilled.match(dispatchResult)) {
        navigate('/');
      }

      // 332 выводим в консоль ошибку если санк login зареджектился
      if (login.rejected.match(dispatchResult)) {
        console.error(dispatchResult.error.message);
      }
    },
    [dispatch, userName, navigate, password],
  );

  return (
    <div className="container">
      <div className="auth-container">
        <div className="form-container">
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Ваше имя</Form.Label>
              <input type="text" value={userName} onChange={handleNameChange} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Пароль</Form.Label>
              <input
                type="password"
                value={password}
                onChange={handlePasswordChange}
              />
            </Form.Group>

            <Button className="auth-button" variant="primary" type="submit">
              Войти
            </Button>
          </Form>
          {error && <div style={{ display: 'block' }}>{error}</div>}
        </div>
      </div>
    </div>
  );
}

export default FormAuth;
