
import {
  BrowserRouter as Router,
  Routes as Switch,
  Route
} from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux"

import HomePage from "./Pages/home-page/home-page";
import OrderPage from "./Pages/order-page/order-page";
import Header from "./Components/header/Header";
import GamePage from "./Pages/game-page/game-page";


function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Header />
          <Switch>
            <Route exact path="/" element={<HomePage />} />
            <Route exact path="/app/:title" element={<GamePage/>} />
            <Route exact path="/order" element={<OrderPage />} />
          </Switch>
        </div>
      </Router>
    </Provider>

  );
}

export default App;
