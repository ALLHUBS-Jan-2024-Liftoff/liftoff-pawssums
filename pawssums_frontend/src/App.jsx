import { useState } from 'react'
import './App.css'
import { RegistrationForm } from "./components/RegistrationForm";
import { LoginForm } from "./components/LoginForm";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>WILD ENCOUNTERS</h1>
      <RegistrationForm/>
      <LoginForm/>
    </>
  )
}

export default App
