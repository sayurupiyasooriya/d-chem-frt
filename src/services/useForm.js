import { useState, useEffect } from "react";

const useForm = (validator) => {
    const [values, setValues] = useState({
        userName: '',
        email: '',
        password: '',
        password2: ''
    })
    const [errors, setErrors] = useState({

    })

    const handleSubmit = e => {
        e.preventDefault()
        setErrors(validator(values))
    }

    const handleChange = e => {
        const { name, value } = e.target
        setValues({
            ...values,
            [name]: value
        })
    }
    return { handleChange, values, handleSubmit, errors }
}

export default useForm