
import './App.css';
import React from 'react';
import Info from "./info"
import Header from "./header"
import data from './data';


function App() {
const cards = data.map(item => {
  return (
    <Info
    key = {item.title}
    item = {item}
    />
  )
})
  return (
    <div className="App">
      <Header/>
     {cards}
    </div>
  );
}

export default App;
