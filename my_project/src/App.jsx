import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from'./components/navbar/Navbar';
import Footer from './Footer';
import Home from './Home';
import Product from './Product';

function App() {
  const [count, setCount] = useState(0)

  return (
     <div>
      <Navbar/>
      <Home/>
      <Product/>
      <Footer/>
      
     </div>
  )
}

export default App
