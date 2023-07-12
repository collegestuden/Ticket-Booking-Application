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


import { BrowserRouter,Routes,Route } from 'react-router-dom';
export default function App() {
  return (
      <BrowserRouter>
    <div>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/Login' element={<Login/>}></Route>
        <Route path='/Forgot' element={<Forgot/>}></Route>
        <Route path='/Home' element={<Home/>}></Route>
        <Route path='/Seat' element={<Seat/>}></Route>
        <Route path='/Comedy' element={<Comedy/>}></Route>
        <Route path='/Thriller' element={<Thriller/>}></Route>
        <Route path='/Adventure' element={<Adventure/>}></Route>
        <Route path='/Animation' element={<Animation/>}></Route>
        <Route path='/Science' element={<Science/>}></Route>
        <Route path='/Hindi' element={<Hindi/>}></Route>
        <Route path='/English' element={<English/>}></Route>
        <Route path='/Tamil' element={<Tamil/>}></Route>
        

        
        
        
        

        
      </Routes>
    </div>
    </BrowserRouter>
  )
}
