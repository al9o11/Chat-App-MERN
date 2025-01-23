import React, { useEffect } from 'react';
import NavBar from './components/NavBar.jsx';
import { Navigate, Route, Routes } from 'react-router-dom';
import { useAuthStore } from './store/useAuthStore.js';
import {Loader} from 'lucide-react';
import { Toaster } from 'react-hot-toast';
import { useThemeStore } from './store/useThemeStore.js';

import HomePage from './pages/HomePage.jsx';
import SignUpPage from './pages/SignUpPage.jsx';
import LogInPage from './pages/LogInPage.jsx';
import SettingsPage from './pages/SettingsPage.jsx';
import ProfilePage from './pages/ProfilePage.jsx';



const App = () => {
  const{authUser, checkAuth, isCheckingAuth,onlineUsers} = useAuthStore();
  const {theme}=useThemeStore();

  console.log({onlineUsers});

  useEffect(() => {
    checkAuth()
  }, [checkAuth]);

  console.log({authUser});

  if(isCheckingAuth && !authUser){ return(
    <div className="flex items-center justify-center h-screen">
        <Loader className="size-10 animate-spin" />
        
      </div>
  ) 
  };
  return (
    <div data-theme={theme}>
      <NavBar/>
      <Routes>
        <Route path="/" element={authUser?<HomePage/> : <Navigate to ="/login" />} />
        <Route path="/signup" element={!authUser?<SignUpPage/>: <Navigate to ="/" />} />
        <Route path="/login" element={!authUser?<LogInPage/>: <Navigate to ="/" />} />
        <Route path="/settings" element={authUser?<SettingsPage/>: <Navigate to ="/login"/>} />
        <Route path="/profile" element={authUser?<ProfilePage/>: <Navigate to ="/login" />} />
      </Routes>
      <Toaster />
    </div>
  )
}

export default App