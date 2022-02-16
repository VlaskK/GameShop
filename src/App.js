
import {
  BrowserRouter as Router,
  Routes as Switch,
  Route
} from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux"

import HomePage from "./Pages/home-page/home-page";

import Header from "./Components/header/Header";


function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Header />
          <Switch>
            <Route exact path="/" element={<HomePage />} />
          </Switch>
        </div>
      </Router>
    </Provider>

  );
}

export default App;
