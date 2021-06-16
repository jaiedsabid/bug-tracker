import './App.css';
import Home from "./components/Home";
import ConfigureStore from "./redux/configureStore";
import {Provider} from "react-redux";

const store = ConfigureStore();

function App(props) {
  return (
      <Provider store={store}>
        <Home />
      </Provider>
  );
}

export default App;
