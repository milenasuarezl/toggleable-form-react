import React, { createElement, useRef, useState } from "react"
import { formData } from "../App"
import ButtonToggle from "./ButtonToggle"
import FormToggle from "./FormToggle"


type ToggleableFormProps = {
    forms: Array<formData>
}

const ToggleableForm: React.FC<ToggleableFormProps> = ({ forms }) => {
   const [currentForm, setCurrentForm] = useState(0)
   const focusRef = useRef<HTMLInputElement>(null)

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
                {createElement(el.component, { ref: focusRef })}
            </div>)
        }
    </FormToggle>
   </>
}
export default ToggleableForm