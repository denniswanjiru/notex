import React from 'react'
import { Switch, Route, BrowserRouter } from "react-router-dom";
import App from './components/App';
import About from './components/About';

export default function Routes({ context, client }) {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={App} />
        <Route exact path="/about" component={About} />
      </Switch>
    </BrowserRouter>
  )
}
