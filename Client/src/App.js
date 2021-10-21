import React from "react";
import { BrowserRouter as Router, Switch, Route, } from "react-router-dom";
import show from "./components/show";
import EditContacts from "./components/EditContacts";
import add from "./components/add";
import view from "./components/view";
import reports from "./components/reports";


function App() {
  return (
    <div><Router>
      <div>
              <Switch>
                <Route exact path='/' component={show}/>
                <Route path='/add' component={add} />
                <Route path='/reports' component={reports} />
                <Route path='/view/:id' component={view}/>
                <Route path="/EditContacts/:id" component={EditContacts} />
              </Switch>
      </div>
  </Router>
  
 
</div>
  );
}

export default App;
