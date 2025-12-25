import React, { useState } from 'react'
import Header from './components/Header'
import { Routes } from 'react-router-dom'
import SideBar from './components/SideBar'

const App = () => {
  const [showSideBar, setShowSideBar]=useState(true)
  
  return (
    <div className='bg-black min-h-screen w-full text-white'>
      <Header setShowSideBar={setShowSideBar}/>
      <SideBar showSideBar={showSideBar}/>
    </div>
  )
}

export default App