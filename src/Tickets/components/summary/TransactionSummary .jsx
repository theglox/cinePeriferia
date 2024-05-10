import { useSelector } from "react-redux";

// TODO: AGREGARRECUER PARA TRAER ESTADOR  DE LA RESERVACION 


const TransactionSummary = () => {
  const {user,id,cinema} = useSelector(state =>state)

  return (
    <div>
      <h3>Detalles de la reserva:</h3>
      <p>Horario seleccionado: {cinema.selectedSchedule}</p>
      <p>Total: $ {cinema.total}</p>
      <p>Ubicación de la silla: {cinema.seatLocation}</p>
      <p>Nombre: {user.name}</p>
      <p>Correo electrónico: {user.email}</p>
      <p>Método de pago: {user.paymentMethod}</p>
      <p>Id: {id}</p>

    </div>
  );
};

export default TransactionSummary;
