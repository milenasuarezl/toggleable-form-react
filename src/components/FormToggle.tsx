import React from "react"

type FormToggleProps = {
    children: React.ReactNode
    currentIndex: number
}


const FormToggle: React.FC<FormToggleProps> = ({ children, currentIndex }) => {
    if (Array.isArray(children)) {
        return <div>{children[currentIndex]}</div>
    }

    return null
}
export default FormToggle