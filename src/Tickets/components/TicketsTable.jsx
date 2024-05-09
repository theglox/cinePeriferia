import { useEffect, useReducer } from "react";
import TicketRow from "./TicketRow";
import ticketsReducer, { initialState } from "../../reducers/ticketsReducer";
import {
  ADD_QUANTITY,
  SELECT_SCHEDULE,
  SET_TICKETS,
  SUBST_QUANTITY,
} from "../../actions/tickets";

const TicketsTable = ({ tickets }) => {
  const [state, dispatch] = useReducer(ticketsReducer, initialState);
  const addTicketQuantity = (id) => {
    dispatch({ type: ADD_QUANTITY, payload: { id } });
  };
  const substractTicketQuantity = (id) => {
    dispatch({ type: SUBST_QUANTITY, payload: { id } });
  };

  const handleScheduleSelect = (horario) => {
    dispatch({ type: SELECT_SCHEDULE, payload: horario });
  };

  useEffect(() => {
    dispatch({ type: SET_TICKETS, payload: { tickets } });
  }, [tickets]);

  return (
    <>
      <div>
        <h4>Selecciona un horario de función:</h4>
        <ul>
          {state.schedule.map((schedule) => (
            <li key={schedule} onClick={() => handleScheduleSelect(schedule)}>
              {schedule}
            </li>
          ))}
        </ul>
        <p>Horario seleccionado: {state.horarioSeleccionado}</p>
        {/* Aquí iría el formulario o cualquier otro componente que necesite el horario seleccionado */}

        <h4>Seleccione número de boletas</h4>
        <table>
          <thead>
            <tr>
              <th>Tickets</th>
              <th>Cantidad</th>
              <th>Precio</th>
            </tr>
          </thead>
          <tbody>
            {state.tickets.map((ticket) => (
              <TicketRow
                key={ticket.id}
                {...ticket}
                addTicketQuantity={addTicketQuantity}
                substractTicketQuantity={substractTicketQuantity}
              />
            ))}
          </tbody>
        </table>
      </div>
      <div>
        <h2>Total:${state.total} </h2>
      </div>
    </>
  );
};

export default TicketsTable;
