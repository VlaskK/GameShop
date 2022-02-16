
import {
  BrowserRouter as Router,
  Routes as Switch,
  Route
} from "react-router-dom";
import HomePage from "./Pages/home-page/home-page";

import Header from "./Components/header/Header";


function App() {
  return (
    <Router>
      <div className="App">
        <Header/>
        <Switch>
          <Route exact path="/" element={<HomePage/>}/>
          
        </Switch>
      </div>
    </Router>
  );
}

export default App;
