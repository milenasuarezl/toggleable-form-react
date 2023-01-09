import { createElement } from "react"
import ButtonToggle from "./ButtonToggle"
import FormToggle from "./FormToggle"

const ToggleableForm = ({ options }) => {
   const currentForm = 0
   const focusRef = 0

   return <>
    { options.map((el, index) => <ButtonToggle key={`button${index}`}>{el.name}</ButtonToggle>)}
    <FormToggle currentIndex={currentForm}>
        { options.map((el, index) => <div key={`form${index}`}>
            { createElement(el.component, {/* Send something here */})}
        </div>)}
    </FormToggle>
   </>
}
export default ToggleableForm