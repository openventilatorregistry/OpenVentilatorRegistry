import React from 'react';
import './App.css';
import LandingPage from "./components/landingPage/landingPage.jsx";
import RegistrationScreen from "./components/registrationScreen/registrationScreen.jsx";
import Header from "./components/header/header.jsx";





const cards = [
    {
        top:'We',
        strong:'Require',
        bottom:'Ventilators',
        buttons:[
            {
                type:'',
                text:`register need`
            },
            {
                type:'outline',
                text:`view offers`
            }
        ]
    },
    {
        top:'We can',
        strong:'Provide',
        bottom:'Ventilators',
        buttons:[
            {
                type:'',
                text:`Provide Supply`
            },
        ]
    },
];

function App() {
  return (
    <div className="App">
        <Header/>
        <LandingPage cards={cards}/>
        <Header/>
        <br/>
        <RegistrationScreen/>
    </div>
  );
}

export default App;
