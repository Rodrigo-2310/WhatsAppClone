import React, { useStateValue } from "./Components/StateProvider";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import Chat from "./Components/Chat";
import Login from "./Components/Login";
import Sidebar from './Components/Sidebar';

function App() {

  const [{ user }, dispatch] = useStateValue();

  return (
    <div className="app">
      {!user ? (
        <Login/>
      ):(
        <div className="app_body">
        <Router>
          <Sidebar/>

          <Switch>
            <Route path="/rooms/:roomId">
              <Chat/>
            </Route>
            <Route path="/">
              <Chat/>
            </Route>
          </Switch>

        </Router>
      </div>
      )}
    </div>
  );
}

export default App;
