import * as yup from "yup"

export const registerSchema = yup
    .object({
        username: yup.string().required('username is required').min(5,'username should be at least 5 characters'),
        email: yup.string()
        .required("Email is required")
        .matches(/^[^@]+@[^@]+\.[^@.]{2,}$/,'not a valid email'),
        password: yup.string()
        .required( 'Password is required')
        .min(6,"Password must be at  least 6 characters")
    })
    .required()
export const LoginSchema = yup
    .object({
        identifier: yup.string()
        .required("Email is required")
        .matches(/^[^@]+@[^@]+\.[^@.]{2,}$/,'not a valid email'),
        password: yup.string()
        .required( 'Password is required')
        .min(6,"Password must be at  least 6 characters")
    })
    .required()