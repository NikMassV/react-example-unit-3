import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import About from './components/About';
import Users from './components/Users';
import UserId from './components/UserId'
import Error from './errors/Error'

import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';

function App() {
  return (
    <>
      <Header />
      <Router>
        <nav>
          <li><NavLink to="/" exact activeClassName="primer">Main</NavLink></li>
          <li><NavLink to="/about">About</NavLink></li>
          <li><NavLink to="/users">Users</NavLink></li>
        </nav>
        <Routes>
          <Route exact path="/" element={<Main />} />
          <Route path="/about" element={<About />} />
          <Route exact path="/users" element={<Users />} />
          <Route path="/users/:userName" element={<UserId />} />
          <Route errorElement={<Error />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
