import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { Routes, Route } from 'react-router-dom';
import Home from "./Pages/Home";
import NavegationBar from "./components/navbar/navbar";
import Navsup from "./components/navbar/Navsup";
import About from "./Pages/About";
import SigIn from "./Pages/SignIn";
import SignUp from "./Pages/SignUp";
import React from "react";

export default class App extends React.Component {
  constructor(props) {

    super(props);
    this.onLogin = this.onLogin.bind(this);
    this.state = {
      isLoggedIn: false,
      userData: {
        name: null,
        email: null
      }
    }
  }

  onLogin(isLoggedIn, userEmail) {
    this.setState({
      isLoggedIn: isLoggedIn,
      userData: {
        email: userEmail
      }
    })
  }

  render() {
    return (
      <>
        <Navsup />
        <NavegationBar userLogado={this.state.isLoggedIn} emailLogado={this.state.userData.email} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/signin" element={<SigIn onLogin={this.onLogin} />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </>
    );



  }
}

