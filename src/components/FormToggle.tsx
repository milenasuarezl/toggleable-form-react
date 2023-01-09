const FormToggle = ({ children, currentIndex }) => {
    if (Array.isArray(children)) {
        return <div>{children}</div>
    } 

    return null
}
export default FormToggle