import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { Box } from '@mui/material';
import Navbar from './components/Navbar';
import Login from './components/Login';
import Signup from './components/Signup';
import ForgotPassword from './components/ForgetPassword';
import Dashboard from './components/Dashboard';
import Home from './components/HomeDashboard';
import CreateTicket from './components/CreateTicket';
import'./App.css'
const App = () => {
  var location = useLocation();
  console.log('ldd',location.pathname);
  return (
    <>
      {(!((location.pathname=='/login')|| (location.pathname=='/signup') || (location.pathname=='/forget-password'))) && <Navbar/> }
      <Box sx={{ display: 'flex', height: '90.6vh' }}>
      {(!((location.pathname=='/login')|| (location.pathname=='/signup') || (location.pathname=='/forget-password'))) && <Home/> }

        {/* <Home /> */}
        <Box sx={{  backgroundColor: 'white'}}>
          <Routes>
            {/* Dashboard Routes */}
            <Route path='/' element={<Dashboard />} />
            <Route path='/create-ticket' element={<CreateTicket />} />
            {/* Auth Routes */}
            <Route path='/login' element={<Login />} />
            <Route path='/signup' element={<Signup />} />
            <Route path='/forget-password' element={<ForgotPassword />} />
          </Routes>
        </Box>
      </Box>
    </>
  );
};

export default App;
