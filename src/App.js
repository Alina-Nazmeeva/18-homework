import React from 'react';
import './App.css';
import Form from './components/Forms/Form';
import {BrowserRouter, Route, Redirect} from 'react-router-dom';
import WelcomePage from './components/WelcomePage/WelcomePage';

const forms = [{
  path: "/signin"
}, {
  path: "/signup"
}];

function App(){
  return (
    <BrowserRouter>
      <div className="App">
        <Route exact path="/">
          <Redirect to="/signin" />
        </Route>
        <Route exact path="/18-homework">
          <Redirect to="/signin" />
        </Route>
        {forms.map(({path}, index) => (
          <Route path={path} component={Form} key={index} />
        ))}
        <Route path="/welcome" component={WelcomePage} />
      </div>
    </BrowserRouter>
  );
}

export default App;