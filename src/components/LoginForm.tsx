import { useState } from "react"

const LoginForm = (props: unknown) => {
    const [ username, setUsername ] = useState('')
    const [ password, setPassword ] = useState('')

    return <>
        <input 
            type="text" 
            value={username} 
            onChange={(event) => setUsername(event.target.value)}
            placeholder="Username"
        />
        <input 
            type="password" 
            value={password} 
            onChange={(event) => setPassword(event.target.value)}
            placeholder="Password"
        />
        <button>Submit</button>
        <p>{`For all security reason your values are ${username} and ${password}`}</p>
    </>
}

export default LoginForm