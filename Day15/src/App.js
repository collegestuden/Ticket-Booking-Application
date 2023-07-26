import React from 'react'
import Home from './Home';
import Login from './Login';
import Forgot from './Forgot';
import Seat from './Seat';
import Comedy from './Comedy';
import Adventure from './Adventure';
import Thriller from './Thriller';
import Animation from './Animation';
import Science from './Science';
import Hindi from './Hindi';
import English from './English';
import Tamil from './Tamil';
import Theater from './Theater';
import Report from './Report';
import Pay from './Pay';
import Feedback from './Feedback';
import Receipt from './Receipt';
import First from './First';
import Search from './Search';
import Card from './Card';
import ChatBot from './ChatBot';
import SignUp from './SignUp';
import Admin from './Admin';
import Post from './Post';
import Feedbackget from './Feedbackget';

import Get from './Get';
import Put from './Put';
import Delete from './Delete';
import AdmiinSign from './AdmiinSign';
import AdminLogin from './AdminLogin';
import Profile from './Profile';

import { BrowserRouter,Routes,Route } from 'react-router-dom';
export default function App() {
  return (
      <BrowserRouter>
    <div>
      <Routes>
        <Route path='/' element={<First/>}></Route>
        <Route path='/Login' element={<Login/>}></Route>
        <Route path='/Forgot' element={<Forgot/>}></Route>
        <Route path='/Home' element={<Home/>}></Route>
        <Route path='/Seat' element={<Seat/>}></Route>
        <Route path='/Comedy' element={<Comedy/>}></Route>
        <Route path='/Thriller' element={<Thriller/>}></Route>
        <Route path='/Adventure' element={<Adventure/>}></Route>
        <Route path='/Home' element={<Home/>}></Route>
        <Route path='/Feedback' element={<Feedback/>}></Route>
        <Route path='/Animation' element={<Animation/>}></Route>
        <Route path='/Science' element={<Science/>}></Route>
        <Route path='/Hindi' element={<Hindi/>}></Route>
        <Route path='/English' element={<English/>}></Route>
        <Route path='/Tamil' element={<Tamil/>}></Route>
        <Route path='/Theater' element={<Theater/>}></Route>
        <Route path='/Home' element={<Home/>}></Route>
        <Route path='/Report' element={<Report/>}></Route>
        <Route path='/Pay' element={<Pay/>}></Route>
        <Route path='/Receipt' element={<Receipt/>}></Route>
        <Route path='/Home' element={<Home/>}></Route>
        <Route path='/Search' element={<Search/>}></Route>
        <Route path='/Card' element={<Card/>}></Route>
        <Route path='/ChatBot' element={<ChatBot/>}></Route>
        <Route path='/SignUp' element={<SignUp/>}></Route>
        <Route path='/Admin' element={<Admin/>}></Route>
        <Route path='/Post' element={<Post/>}></Route>
        <Route path='/Get' element={<Get/>}></Route>
        <Route path='/Put' element={<Put/>}></Route>
        <Route path='/Delete' element={<Delete/>}></Route>
        <Route path='/AdminLogin' element={<AdminLogin/>}></Route>
        <Route path='/AdmiinSign' element={<AdmiinSign/>}></Route>
        <Route path='/Home' element={<Home/>}></Route>
        <Route path='/Profile' element={<Profile/>}></Route>
        <Route path='/Feedbackget' element={<Feedbackget/>}></Route>

        

        
        
        
        

        
      </Routes>
    </div>
    </BrowserRouter>
  )
}
