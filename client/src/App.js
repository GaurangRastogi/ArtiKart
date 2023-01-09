import './App.css';
import { useState } from 'react';
import HomePage from './pages/Home_Page/HomePage';
import SignIn from './pages/SignIn';
import SignInSeller from './pages/SignInSeller';
import SignUp from './pages/SignUp'
import SignUpSeller from './pages/SignUpSeller';
import LandingPage from './pages/LandingPage/LandingPage';
import Admin from './pages/AdminPage/Admin';


function App() {
  const [state,setState]=useState("home");
  const [admin,setAdmin]=useState("");
  const renderSwitch = (params) =>{
    switch(params) {
      case 'user':
        return "User";
      case 'upuser':
        return "SignUpUser";
      case 'seller':
        return "Seller";
      case 'upseller':
        return "SignUpSeller";
      case 'home':
        return 'Home';
      case 'adminPage':
        return 'AdminPage';
      default:
        return 'LandingPage';
    }
  }
  const homepage = ()=>{
    setState("home");
  }
  const signIn = () =>{
    setState("user");
  }
  const signUp = () =>{
    setState("upuser");
  }
  const signInSeller = () =>{
    setState("seller");
  }
  const signUpSeller =() =>{
    setState("upseller");
  }
  const adminPage = (id)=>{
    setState('adminPage');
    setAdmin(id);
  }
  const landingPage=(id,name)=>{
    setState(`${id} ${name}`);
  }

  return (
    <div className="App">
      {(renderSwitch(state)==="Home")&&(<HomePage signIn={signIn} signInSeller={signInSeller}/>)}
      {(renderSwitch(state)==="User")&&(<SignIn homepage={homepage} signUp={signUp} landingPage={landingPage}/>)}
      {(renderSwitch(state)==="Seller")&&(<SignInSeller homepage={homepage} signUpSeller={signUpSeller} adminPage={adminPage}/>)}
      {(renderSwitch(state)==="SignUpUser")&&(<SignUp homepage={homepage} signIn={signIn}/>)}
      {(renderSwitch(state)==="SignUpSeller")&&(<SignUpSeller homepage={homepage} signInSeller={signInSeller}/>)}
      {(renderSwitch(state)==="LandingPage")&&(<LandingPage homepage={homepage} id={state}/>)}
      {(renderSwitch(state)==="AdminPage")&&(<Admin homepage={homepage} id={admin} />)}
    </div>
  );
}

export default App;
