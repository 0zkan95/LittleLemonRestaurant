import './App.css';
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Menu from './pages/Menu';
import Reserv from './pages/Reserv';
import Order from './pages/Order';
import Login from './pages/Login';
import SignUp from './pages/Signup';
import React from 'react';
import NavBar from './components/NavBar';
import ConfirmedBooking from './components/ConfirmedBooking';






function App() {
  const [user, setUser] = useState(null);  // Track logged-in user state


  return (
    <Router>
      <NavBar user={user} setUser={setUser} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/menu" element={<Menu />} />
        <Route path='/reservation' element={<Reserv />} />
        <Route path='/confirmed' element={<ConfirmedBooking />} />
        <Route path="/order" element={<Order />} />
        <Route path="/login" element={<Login setUser={setUser} />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </Router>
  );
}

export default App;
