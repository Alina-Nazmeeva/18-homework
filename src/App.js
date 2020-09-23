import React from 'react';
import './App.css';
import SignIn from './Forms/SignIn';
import Form from './Forms/Form';

function App() {
  return (
    <div className="App">
      <Form title="Sign In" checkboxText="Remember me" linkContent="Forgot password?"/>
    </div>
  );
}

export default App;
