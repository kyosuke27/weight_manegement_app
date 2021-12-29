import logo from './logo.svg';
import './App.css';
import * as React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { RegistMenu } from './component/regist_menu';
import { ShowWeight } from './component/show_weight';

function App() {
  return (
    <div className="App">
      <RegistMenu/>
      <ShowWeight />
    </div>
  );
}

export default App;
