import React, { createElement, useState } from "react"
import { formData } from "../App"
import ButtonToggle from "./ButtonToggle"
import FormToggle from "./FormToggle"


type ToggleableFormProps = {
    forms: Array<formData>
}

const ToggleableForm: React.FC<ToggleableFormProps> = ({ forms }) => {
   const [currentForm, setCurrentForm] = useState(0)
   const focusRef = 0

   return <>
    { forms.map((el: formData, index: number) => 
        <ButtonToggle 
            key={`button${index}`}
            toggleForm={() => setCurrentForm(index)}
        >{el.name}
        </ButtonToggle>)
    }
    <FormToggle currentIndex={currentForm}>
        { forms.map((el: formData, index: number) => 
            <div key={`form${index}`}>
                { createElement(el.component, {/* Send something here */})}
            </div>)
        }
    </FormToggle>
   </>
}
export default ToggleableForm