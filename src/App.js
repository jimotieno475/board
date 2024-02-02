// App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Landing from './components/Landing';
import Login from './components/Login';
import Logout from './components/Logout';
import SignUp from './components/Signup';
import Board from './components/Board';
import Scores from './components/Scores';

function App() {
  const [userId, setUserId] = useState(null);

  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Landing />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/landing' element={<Landing />} />
        <Route path='/scores' element={<Scores />} />
        <Route path='/login' element={<Login setUserId={setUserId} />} />
        <Route path='/board' element={<Board userId={userId}/>} />
        <Route path='/home' element={<Home/>} />
        <Route path='/logout' element={<Logout />} />
      </Routes>
    </Router>
  );
}

export default App;

