import { useState } from 'react'
import './App.css'
// import Header from './assets/components/Header'
import './assets/components/style.css'
// import Form from './assets/components/Form'
import List from './assets/components/List'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <List/>
    </>
  )
}

export default App
