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
        <button className="btn small " onClick={()=> substractTicketQuantity(id)}> - </button>
        <span>{cantidad}</span>
        <button className="btn small " onClick={()=> addTicketQuantity(id)}> + </button>
      </td>
      <td className="text-center">${precio}</td>
    </tr>

  );
};

export default TicketRow;
