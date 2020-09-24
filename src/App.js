import React from 'react';
import './App.css';
import Form from './components/Forms/Form';
import {BrowserRouter, Route, Redirect} from 'react-router-dom';

const forms = [{
  path: "/signin"
}, {
  path: "/signup"
}];

function App(){
  return (
    <BrowserRouter>
      <div className="App">
        <Route exact path="/18-homework">
          <Redirect to="/signin" />
        </Route>
        {forms.map(({path}, index) => (
          <Route path={path} component={Form} key={index} />
        ))}
        {/* <Route path="/signin" component={Form} onInputChange={this.onInputChange}/>
        <Route path="/signup" component={Form} onInputChange={this.onInputChange}/>       */}
      </div>
    </BrowserRouter>
  );
}

export default App;