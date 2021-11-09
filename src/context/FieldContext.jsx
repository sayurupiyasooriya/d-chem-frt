import { createContext, useState } from "react";

export const FieldContext = createContext('');
export const CourseContext = createContext('');

export const FieldProvider = props => {
    const [field, setField] = useState('')
    const [course, setCourse] = useState('')
    return (
        <FieldContext.Provider value={[field, setField]} >
            {props.children}
        </ FieldContext.Provider>
    )
}