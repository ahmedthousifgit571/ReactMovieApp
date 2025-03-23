import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MovieCard from './components/MovieCard'
import { Routes,Route } from 'react-router-dom'
import Home from './pages/Home'
import Favorite from './pages/Favorite'

function App() {
  

  return (
    <main className='main-content'>
     <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/fav' element={<Favorite /> }/>
     </Routes>
    </main>
  )
}

export default App
