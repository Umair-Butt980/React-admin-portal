// import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import Forms from './components/Forms';
import Tables from './components/Tables';
import Template from './pages/mainPage';
import Dashboard from './components/Dashboard';

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <Template>
      <Router>
        <Switch>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
          <Route path="/forms">
            <Forms />
          </Route>
          <Route path="/tables">
            <Tables />
          </Route>
          <Redirect from="/" to="/dashboard" exact />
        </Switch>
      </Router>
    </Template>
  );
}

export default App;
