import React, { Component } from "react";
import "./App.css";
import SampleComponent from "./components/SampleComponent";
import { Provider as ReduxProvider } from "react-redux";
import  {Route,Link, BrowserRouter as Router, Switch} from "react-router-dom";
import configureStore from "./modules/store";
import Home from "./components/Home";
import Weather from "./components/Weather";

const reduxStore = configureStore(window.REDUX_INITIAL_DATA);

const routing = (
  <Router>
    <Switch>
      <Route exact="/" component={Home}/>
      <Route path="/weather/:month/:day" component={Weather}/>
    </Switch>
    <br></br>
    <Link to="/weather/March/20">riderecciona a</Link>
    <Link to="/weather/March/21">riderecciona a</Link>
    <Link to="/weather/March/22">riderecciona a</Link>
    <Link to="/weather/March/23">riderecciona a</Link>
  </Router>
);

class App extends Component {
  render() {
    return (
      <ReduxProvider store={reduxStore}>
        <div className="App">
          {routing}
        </div>
      </ReduxProvider>
    );
  }
}

export default App;