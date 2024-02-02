import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Landing from './components/Landing';
import Login from './components/Login';
import Logout from './components/Logout';
import SignUp from './components/Signup';
import { APPCONTEXT } from './components/APPContext';
function App() {
    return (
      <APPCONTEXT.Provider value={{ }}>
        <Router>
          <Routes>
            <Route exact path='/' element={<SignUp />} />
            <Route path='/landing' element={<Landing />} />
            <Route path='/home' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/logout' element={<Logout />} />
          </Routes>
        </Router>
      </APPCONTEXT.Provider>
    );
}

export default App;
