import React from "react"

type ButtonToggleProps = {
    children: React.ReactNode
    toggleForm: () => void
}

const ButtonToggle: React.FC<ButtonToggleProps> = ({ children, toggleForm }) => {
 return <button onClick={() => toggleForm()}>{children}</button>
}

export default ButtonToggle