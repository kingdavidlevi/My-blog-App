import React from 'react';
import './App.css';
import { createBrowserRouter,createRoutesFromElements,Route,Router,RouterProvider, Routes } from 'react-router-dom';
import MainLayout from './MainLayout'; 
import Home from './Home'
import Posts from './Posts';
 import Notifications from './Notifications';
import Login,{action as SignUpAction} from './Login';
import SignUp from './SignUp';


const router = createBrowserRouter(createRoutesFromElements(
  <>
  <Route  element={<MainLayout/>}>
   <Route path='home' element={<Home/>} />
   <Route path='/:id' element={<Posts/>} />
   <Route path='Notifications' element={< Notifications/>} />
   
  
  
    </Route>
  
  <Route path='Signup' element={<SignUp/>} />
    <Route path='/' element={<Login/>} action={SignUpAction} />
    </>
))

function App () {
  return (
    <RouterProvider router={router} />  
  )
}

export default App;


 
    
 