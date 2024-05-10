import { AppRouter } from "./router/AppRouter"
import './CinemaApp.scss';
import { Provider } from "react-redux";
import store from "./store";

const CinemaApp = () => {
  return (
    <Provider store={store}>
      <AppRouter/>
    </Provider>

  )
}

export default CinemaApp
