import { forwardRef, MutableRefObject, useEffect, useState } from "react"

const SignupForm = forwardRef<HTMLInputElement | null>((props, ref) => {
    const [ username, setUsername ] = useState('username')
    const [ password, setPassword ] = useState('password')
    const [ email, setEmail ] = useState('Email')

    useEffect(() => {
        ref?.current?.focus()
    }, [])

    return <>
        <input 
            type="text" 
            value={username} 
            ref={ref}
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
})

export default SignupForm