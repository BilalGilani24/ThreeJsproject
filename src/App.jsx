import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './index.css'
import Home from './pages/Home'
import Canva from './Canvas/Canva'
import Customizer from './pages/Customizer'
function App() {
  const [count, setCount] = useState(0)

  return (
    <main className='app transition-all ease-in'>
      <Home/>
      <Canva/>
      <Customizer/>
    </main>
  )
}

export default App
