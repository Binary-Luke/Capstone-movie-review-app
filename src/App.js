import { useState } from "react";
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from './pages/Home';
import Reviews from './pages/Reviews';
import CreatePost from './pages/CreatePost';
import Profile from './pages/Profile';
import Login from './pages/Login';
import { signOut } from "firebase/auth";
import { auth } from "./firebase-config";
import Movies from './pages/Movies';
import Footer from './footer'


function App() {
  const [isAuth, setIsAuth] = useState(localStorage.getItem("isAuth"));

  const signUserOut = () => {
    signOut(auth).then(() => {
      localStorage.clear();
      setIsAuth(false);
      window.location.pathname = "/login";
    });
  };

  return (
    <Router>
      
      <nav>
        
          <Link to="/"> Home </Link>
          <Link to="/movies"> Movies </Link>
          <Link to="/reviews"> Reviews </Link>
          {!isAuth ? (
            <Link to="/login"> Login </Link>
          ) : (
            <>
              <Link to="/profile"> Profile </Link>
              <Link to="/createpost"> Write Review </Link>
              <button className="logout-btn" onClick={signUserOut}> Log Out</button>
            </>
          )}
        
      </nav>
      <Routes>
        <Route path="/" element={<Home isAuth={isAuth} />} />
        <Route path="/reviews" element={<Reviews isAuth={isAuth}/>} />
        <Route path="/createpost" element={<CreatePost isAuth={isAuth} />} />
        <Route path="/profile" element={<Profile isAuth={isAuth} />} />
        <Route path="/login" element={<Login setIsAuth={setIsAuth}/>} />
        <Route path="/movies" element={<Movies />} />

      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
