import { ILoginInput, IRegisterInput } from "../interfaces";

export const Register_Form:IRegisterInput[]=[
    {
        name:"username",
        placeholder:"Username",
        type:"text",
        validation:{
            required:true,
            minLength:5,
        },
    },
    {
        name:"email",
        placeholder:"email address",
        type:"email",
        validation:{
            required:true,
            pattern:/^[^@]+@[^@]+\.[^@.]{2,}$/,
        },
    },
    {
        name:"password",
        placeholder:"password",
        type:"password",
        validation:{
            required:true,
            minLength:6,
        },
    },
]
export const Login_Form:ILoginInput[]=[
    {
        name:"identifier",
        placeholder:"email address",
        type:"email",
        validation:{
            required:true,
            pattern:/^[^@]+@[^@]+\.[^@.]{2,}$/,
        },
    },
    {
        name:"password",
        placeholder:"password",
        type:"password",
        validation:{
            required:true,
            minLength:6,
        },
    },
]