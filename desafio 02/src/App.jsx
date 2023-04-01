import { useState } from 'react'
import Nav from './components/Nav/Nav'
import Shoes from './components/shoes/Shoes'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
     <Nav/>
     <Shoes/>
    </div>
  )
}

export default App
