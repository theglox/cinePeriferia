const TicketRow = ({
  id,
  descripcion,
  precio,
  cantidad,
  addTicketQuantity,
  substractTicketQuantity,
}) => {
  return (
    <tr>
      <td>{descripcion}</td>
      <td className="text-center">
        <button className="btn" onClick={()=> substractTicketQuantity(id)}> - </button>
        <span>{cantidad}</span>
        <button className="btn" onClick={()=> addTicketQuantity(id)}> + </button>
      </td>
      <td className="text-center">${precio}</td>
    </tr>

  );
};

export default TicketRow;
