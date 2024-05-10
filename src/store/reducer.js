import {
  SET_TICKETS,
  ADD_QUANTITY,
  SUBST_QUANTITY,
  SELECT_SCHEDULE,
  FINISH_TRANSACTION,
} from "./tickets";

export const initialState = {
  id: Math.floor(Math.random() * 9000) + 1000,
  isPayed: false,
  cinema: {
    tickets: [
      {
        id: 1,
        descripcion: "Voleta general",
        precio: 15000,
        cantidad: 0,
        fecha: "",
      },
      {
        id: 2,
        descripcion: "Voleta Preferencial",
        precio: 60000,
        cantidad: 0,
        fecha: "",
      },
    ],
    total: 0,
    schedule: ["9:00", "11:00", "13:00", "15:00"],
    selectedSchedule: "9:00",
    seatLocation: "g3,g4",
  },
  user: {
    name: "",
    email: "",
    paymentMethod: null,
  },
};

const getTotal = (tickets) =>
  tickets
    .map((ticket) => +ticket.precio * +ticket.cantidad)
    .reduce((prev, current) => prev + current, 0);

const TransactionReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_TICKETS: {
      return {
        ...state,
        cinema: {
          ...state.cinema,
          ticket: action.payload.tickets,
          total: getTotal(state.cinema.tickets),
          schedule: ["9:00", "11:00", "13:00", "15:00"],
        },
      };
    }
    // modificar  # boletas
    case ADD_QUANTITY: {
      console.log("state:", state);
      const tickets = state.cinema.tickets.map((ticket) =>
        ticket.id === action.payload.id
          ? { ...ticket, cantidad: ticket.cantidad + 1 }
          : ticket
      );
      return {
        ...state,
        cinema: {
          ...state.cinema,
          tickets,
          total: getTotal(state.cinema.tickets),
        },
      };
    }
    case SUBST_QUANTITY: {
      const tickets = state.cinema.tickets.map((ticket) =>
        ticket.id === action.payload.id
          ? { ...ticket, cantidad: ticket.cantidad - 1 }
          : ticket
      );

      return {
        ...state,
        cinema: {
          ...state.cinema,
          tickets,
          total: getTotal(state.cinema.tickets),
        },
      };
    }

    case SELECT_SCHEDULE:
      return {
        ...state,
        cinema: {
          ...state.cinema,
          selectedSchedule: action.payload,
        },
      };
    case FINISH_TRANSACTION:
      console.log("test", action);
      return {
        ...state,
        isPayed: true,
        user: {
          ...state.user,
          name: action.payload.name,
          email: action.payload.email,
          paymentMethod: action.payload.paymentMethod,
        },
      };

    default:
      return state;
  }
};

export default TransactionReducer;
