import { SET_TICKETS, ADD_QUANTITY, SUBST_QUANTITY, SELECT_SCHEDULE } from "../actions/tickets";

export const initialState = {
  tickets: [],
  total: 0,
  resume: {},
  schedule:[],
  selectedSchedule: null
};
const getTotal = (tickets) =>
  tickets
    .map((ticket) => +ticket.precio * +ticket.cantidad)
    .reduce((prev, current) => prev + current, 0);

    const selectSchedule = (state, horarioSeleccionado) => {
        return {
          ...state,
          horarioSeleccionado: horarioSeleccionado
        };
      };
      

const ticketsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_TICKETS: {

      return {
        tickets: action.payload.tickets,
        total: getTotal(state.tickets),
        schedule :['9:00', '11:00', '13:00', '15:00']
      };
    }
    case ADD_QUANTITY: {
      const tickets = state.tickets.map((ticket) => 
        ticket.id === action.payload.id
          ? { ...ticket, cantidad: ticket.cantidad + 1 }
          : ticket
        );
          return {
            ...state,
            tickets,
            total: getTotal(tickets),
          }
      }
      case SUBST_QUANTITY: {
        console.log(action.payload.id);      const tickets = state.tickets.map((ticket) => 
        ticket.id === action.payload.id && ticket.cantidad >0
          ? { ...ticket, cantidad: ticket.cantidad - 1 }
          : ticket
        );
          return {
           ... state,
            tickets,
            total: getTotal(tickets),
          }
      }

      case SELECT_SCHEDULE:
        return selectSchedule(state, action.payload);
    
    default:
      return state;
  }
};

export default ticketsReducer;
