import React from "react";
import { Route, Switch} from 'react-router-dom'
import Home from "../Home"
function App() {
  return (
    
    <React.Fragment>
    <Switch>
      
      <Route path="/home" component={Home} />
      <Route path="/" component={Home} />
      
    </Switch>
  </React.Fragment>
  );
}

export default App;
