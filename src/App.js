import logo from './logo.svg';
import './App.css';
import * as React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { RegistMenu } from './component/regist_menu';

function App() {
  return (
    <div className="App">
      <RegistMenu/>
    </div>
  );
}

export default App;
