
import './App.css';

import React, { Component } from 'react'
import Layout from './components/Layout'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Userlist from './components/Userlist'
import Create from './components/Create'

import UserProfile from './components/UserProfile'








export default class App extends Component {
  render() {
    return (
      
      <BrowserRouter>
      <Routes>
        <Route path='/'  element={<Layout/>}>
        <Route index element={<Userlist/>}></Route>
        <Route path='/create' element={<Create/>}></Route>
        
        <Route path='/users/:id' element={<UserProfile/>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
    );
    
  }

}

