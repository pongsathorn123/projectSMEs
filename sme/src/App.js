import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import routesApp from './routes';
import './App.css';


class App extends Component {
  renderRouter(){
    return (
      <Switch>
        <>
          {routesApp.map((route, index) => (
            <Route 
              key={index} 
              path={route.path} 
              exact={route.exact}
              component={route.component} 
            />
          ))}
        </>
      </Switch>
    )
  }
  
  
  render() {
    return(
      <BrowserRouter>
        {this.renderRouter()}
      </BrowserRouter>
    )
  }
}

export default App;
