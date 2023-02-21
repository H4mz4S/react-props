import './App.css';
import React from 'react';
import Profile from './Profile/ProfileComponent/Profile';
import img from './images/hamza.jpg';


function App() {
  const styleObject = {color:"red"}
  const handleName = name => 
  alert(`
  hello : ${name}
  `);
  
  return (
      <div style ={styleObject}>
        <Profile><img src = {img} alt = "logo"></img> {handleName}</Profile>
      </div>
  
   
  );
}



export default App;
