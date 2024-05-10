import TicketRow from "./TicketRow";

import {
  ADD_QUANTITY,
  SELECT_SCHEDULE,
  SUBST_QUANTITY,
} from "../../store/tickets";
import { useDispatch, useSelector } from "react-redux";

const TicketsTable = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  const addTicketQuantity = (id) => {
    dispatch({ type: ADD_QUANTITY, payload: { id } });
  };
  const substractTicketQuantity = (id) => {
    dispatch({ type: SUBST_QUANTITY, payload: { id } });
  };

  const handleScheduleSelect = (horario) => {
    dispatch({ type: SELECT_SCHEDULE, payload: horario });
  };

  // useEffect(() => {
  //   dispatch({ type: SET_TICKETS, payload: { tickets } });
  // }, [tickets]);

  return (
    <>
      <div>
        <h4>Selecciona un horario de función:</h4>
        <ul>
          {state.cinema?.schedule?.map((schedule) => (
            <li key={schedule} onClick={() => handleScheduleSelect(schedule)}>
              {schedule}
            </li>
          ))}
        </ul>
        <p>Horario seleccionado: {state.cinema.selectedSchedule}</p>
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
            {state.cinema?.tickets?.map((ticket) => (
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
        <h2>Total:${state.cinema.total} </h2>
      </div>
    </>
  );
};

export default TicketsTable;
