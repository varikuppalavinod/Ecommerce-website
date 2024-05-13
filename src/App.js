
import React, { useContext } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Layout from './Components/Layout/Layout';
import UserProfile from './Components/Profile/UserProfile';
import AuthPage from './Pages/AuthPage';
import HomePage from './Pages/HomePage';
import Authcontext from "./Components/store/Authcontext";

function App() {
  const authctx = useContext(Authcontext);

  return (
    <Router>
      <Layout>
        <Routes>
          <Route path='/' element={<HomePage />} />
          {!authctx.isLoggedIn && <Route path='/auth' element={<AuthPage />} />}
          <Route path='/profile' element={authctx.isLoggedIn ? <UserProfile /> : <Navigate to="/auth" />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;


/*
import React from "react"
import { BrowserRouter,  Routes, Route } from "react-router-dom";
import Layout from './Components/Layout/Layout';
import UserProfile from './Components/Profile/UserProfile';
import AuthPage from './Pages/AuthPage';
import HomePage from './Pages/HomePage';

function App() {
  return (
   
    <BrowserRouter>
       <Layout>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/auth' element={<AuthPage />} />
          <Route path='/profile' element={<UserProfile />} />
        </Routes>
        </Layout>
    </BrowserRouter>
   
  );
}

export default App;
*/