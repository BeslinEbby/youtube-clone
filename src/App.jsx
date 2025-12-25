import React, { useState } from 'react'
import Header from './components/Header'

const App = () => {
  const [showSideBar, setShowSideBar]=useState(true)
  
  return (
    <div className='bg-black min-h-screen w-full text-white'>
      <Header setShowSideBar={setShowSideBar}/>
    </div>
  )
}

export default App