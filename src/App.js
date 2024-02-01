import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Landing from './components/Landing';
import Login from './components/Login';
import Logout from './components/Logout';
import SignUp from './components/Signup';

function App() {

  return (
    <Router>
      <Routes>
      <Route exact path='/landing' element={<Landing />} />
        <Route path='/home' element={<Home />} />
        <Route path='/login' element={<Login  />}/>
        <Route path='/logout' element={<Logout/>}/>
        <Route path='/signup' element={<SignUp/>}/>
      </Routes>
    </Router>
  );
}

export default App;
