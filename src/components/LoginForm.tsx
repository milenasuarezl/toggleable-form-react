import { useState } from "react"

const LoginForm = (props: unknown) => {
    const [ username, setUsername ] = useState('username')
    const [ password, setPassword ] = useState('password')

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
        <div>
            <button>Submit</button>
        </div>
        <p>{`For all security reason your values are ${username} and ${password}`}</p>
    </>
}

export default LoginForm