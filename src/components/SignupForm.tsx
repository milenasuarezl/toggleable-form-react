import { useState } from "react"

const SignupForm = (props: unknown) => {
    const [ username, setUsername ] = useState('username')
    const [ password, setPassword ] = useState('password')
    const [ email, setEmail ] = useState('Email')

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
        <input 
            type="email" 
            value={email} 
            onChange={(event) => setEmail(event.target.value)}
            placeholder="Email"
        />
        <div>
            <button>Submit</button>
        </div>
        <p>{`For all security reason your values are ${username}, ${password} and ${email}`}</p>
    </>
}

export default SignupForm