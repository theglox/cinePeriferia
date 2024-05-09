// TODO: AGREGARRECUER PARA TRAER ESTADOR  DE LA RESERVACION 
const reservationDetails = {
    schedule : "11:00 PM",
    numTickets : 2,
    seatLocation : "g3,g4",
    name : "Diego Ferrer",
    email : "diegoglox@gmail.com",
    paymentMethod : "PSE",
    id : "abc-er2-124-234-ffs"
}

const TransactionSummary = () => {


  return (
    <div>
      <h3>Detalles de la reserva:</h3>
      <p>Horario seleccionado: {reservationDetails.schedule}</p>
      <p>Número de tickets: {reservationDetails.numTickets}</p>
      <p>Ubicación de la silla: {reservationDetails.seatLocation}</p>
      <p>Nombre: {reservationDetails.name}</p>
      <p>Correo electrónico: {reservationDetails.email}</p>
      <p>Método de pago: {reservationDetails.paymentMethod}</p>
      <p>Id: {reservationDetails.id}</p>

    </div>
  );
};

export default TransactionSummary;
