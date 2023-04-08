import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HomePage from './components/routes/homePage'
import HeaderNav from './components/sections/header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App h-full w-full">
      <HeaderNav/>  
      <HomePage/>
    </div>
  )
}

export default App
