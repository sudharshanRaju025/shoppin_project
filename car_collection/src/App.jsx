import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Introduction from './Introduction';
import Home from './Home';
import Footer from './Footer';
import Cart from './Cart';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Introduction/>
       <Home/> 
      <Footer/>
   
    </div>
  )
}

export default App
