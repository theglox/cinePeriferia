import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FINISH_TRANSACTION } from '../../../store/tickets';

const PaymentForm = () => {
  const dispatch = useDispatch();
  const { user } = useSelector(state => state);
  const [formData, setFormData] = useState({
    name: user.name,
    email: user.email,
    paymentMethod: '',
    numCard: '' // Agrega el campo numCard al estado local
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.paymentMethod || !formData.numCard) {
      alert('Por favor, complete todos los campos obligatorios.');
      return;
    }

    if (formData.numCard.length !== 16) {
      alert('Por favor, ingrese un número de tarjeta válido.');
      return;
    }

    dispatch({ type: FINISH_TRANSACTION, payload: { ...formData, ispayed: true } });
  };

  return (
    <div>
      <form onSubmit={handleSubmit} >
        <div>
          <label htmlFor="name">Nombre:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required 
          />
        </div>
        <div>
          <label htmlFor="email">Correo electrónico:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required 
          />
        </div>
        <div>
          <label htmlFor="paymentMethod">Método de pago:</label>
          <select
            id="paymentMethod"
            name="paymentMethod"
            value={formData.paymentMethod}
            onChange={handleChange}
            required 
          >
            <option value="">Seleccione un método de pago</option>
            <option value="credito">Tarjeta de crédito</option>
            <option value="debito">Tarjeta de Debito</option>
            <option value="cineCard">Tarjeta crack</option>
          </select>
        </div>
        <div>
          <label htmlFor="numCard">n° tarjeta:</label>
          <input
            type="text" 
            id="numCard"
            name="numCard"
            value={formData.numCard}
            onChange={handleChange}
            required 
            minLength="16" 
            maxLength="16" 
          />
        </div>
        <button className="btn small" type="submit">Pagar</button>
      </form>
    </div>
  );
};

export default PaymentForm;
