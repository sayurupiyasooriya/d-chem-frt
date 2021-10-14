import { createContext, useState } from "react";

export const FieldContext = createContext('ijifjei');

export const FieldProvider = props => {
    const [field, setField] = useState('')
    return (
        <FieldContext.Provider value={[field, setField]} >
            {props.children}
        </ FieldContext.Provider>
    )
}