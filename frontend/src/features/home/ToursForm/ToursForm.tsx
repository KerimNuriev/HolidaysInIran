import React from 'react';
import './ToursForm.scss';

function ToursForm(): JSX.Element {
  return (
    <div className="application">
      <div className="form-overlay">
        <div className="form-container">
          <h3>Оформите заявку на тур</h3>
          <form>
            <input type="text" placeholder="Выберите тур" />
            <input type="text" placeholder="Выберите тур" />
            <input type="text" placeholder="Выберите тур" />
            <button type="button">Отправить</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ToursForm;
