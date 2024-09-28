import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import LoginPage from './LoginPage';




const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/LoginPage" element={<SignIn />} />
        <Route path="/AccountCreation" element={<AccountCreation />} />
        <Route path="/PersonalInformation" element={<PersonalInformation />} />
      </Routes>
    </div>
  );
};

export default App;
