import './App.css'
import ToggleableForm from './components/ToggleableForm'
import LoginForm from './components/LoginForm'
import SignupForm from './components/SignupForm'

function App() {

  let data = [
    { name: 'Log in', component: LoginForm },
    { name: 'Sign up', component: SignupForm }
  ]

  return (
    <>
     <h1>Toggleable form</h1>
     <ToggleableForm options={data}/>
    </>
  )
}

export default App
