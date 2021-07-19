import React from "react"
import { isEmail } from 'validator';

const validate = (values) => {
    let errors = {}
    if (!values.userName.trim()) {
        errors.userName = "User Name Required"
    }

    if (!values.email) {
        errors.email = "Email Required"
    } else if (!isEmail(values.email)) {
        errors.email = "Enter A Valid Email"
    }

    if (!values.password) {
        errors.password = "Password Required"
    }
}

export default validate