import './App.css'
import ToggleableForm from './components/ToggleableForm'
import LoginForm from './components/LoginForm'
import SignupForm from './components/SignupForm'
import { FunctionComponent } from 'react'

export interface formData {
  name: string
  component: FunctionComponent
}

function App() {

  let forms: Array<formData> = [
    { name: 'Log in', component: LoginForm },
    { name: 'Sign up', component: SignupForm }
  ]

  return (
    <>
     <h1>Toggleable form</h1>
     <ToggleableForm forms={forms}/>
    </>
  )
}

export default App
