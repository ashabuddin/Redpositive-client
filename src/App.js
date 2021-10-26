
import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";
import AddUser from "./Components/AddUser";
import AllUsers from "./Components/AllUsers ";
import EditUser from "./Components/EditUser";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import NotFound from "./Components/NotFound";

function App() {
  return (
    <div>
      <Router>
        <Navbar/>
        <Switch>
           <Route exact path="/">
             <Home/>
           </Route>
          <Route exact path="/all">
            <AllUsers/>
          </Route>
          <Route exact path="/add">
            <AddUser/>
          </Route>
          <Route exact path="/edit/:id"> 
             <EditUser/>
          </Route>
          <Route>
            <NotFound/>
          </Route>

        </Switch>
      </Router>
    </div>
  );
}

export default App;
