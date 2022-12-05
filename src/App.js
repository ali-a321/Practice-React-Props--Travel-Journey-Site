
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
const [theme,setTheme] = React.useState(true)

const toggleTheme = () => {
    setTheme(prevState => !prevState)
    
}
  return (
    <div className="App" id={theme ? "light-Mode" : "dark-Mode"}> 
      <Header theme = {theme}/>
      <div className='dark-btn' > {theme ? "Light Mode" : "Dark Mode"}
           <input type="checkbox" className="darkmode" onClick={toggleTheme}/>
      </div>
     {cards}
    </div>
  );
}

export default App;
