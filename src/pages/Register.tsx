import InputErrorMessage from "../components/InputErrorMessage";
import Button from "../components/ui/Button";
import Input from "../components/ui/Input";
import { useForm, SubmitHandler } from "react-hook-form"
import { Register_Form } from "../data";
import { yupResolver } from "@hookform/resolvers/yup"
import { registerSchema } from "../validation";
import axiosinstance from "../config/axios.config";
import toast from "react-hot-toast";
import { useState } from "react";
import { AxiosError } from "axios";
import { IerrorResponse } from "../interfaces";
import { useNavigate } from "react-router-dom";
interface IFormInput {
  email: string
  username: string
  password: string
}
const RegisterPage = () => {
  const navigate =useNavigate()
  const[isLoading,setIsLoasing]=useState(false);
  const { register, handleSubmit,
    formState:{errors} 
  } = useForm<IFormInput>({
    resolver: yupResolver(registerSchema)
  });

  // handlers
  const onSubmit: SubmitHandler<IFormInput> = async data =>{ 
    console.log(data);
    setIsLoasing(true);
  // console.log(errors)
  
  try { 
    const {status}= await axiosinstance.post("/auth/local/Register",data);
    if(status==200) {
      // console.log("Success message will be displayed");
      toast.success("you will navigate to the login  page in 2 seconds!",
      {
        position:"bottom-center",
        duration : 1500,
        style:{
          backgroundColor:"black",
          color:"white",
          width:"fit-content",
        },
      });
      setTimeout(()=>{ 
        navigate( "/login") //function
      } ,2000)
    }
    
  }catch(error){
    console.log(error)
    const errorObj=error as AxiosError<IerrorResponse>
    
    toast.error(`${errorObj.response?.data.error.message}`,
      {
        position:"bottom-center",
        duration : 1500,
      });
  }
  finally{
    setIsLoasing(false);
  }

};
  // renders
  const renderRegisterForm=Register_Form.map(({name,placeholder,type,validation},idx)=>
  <div key={idx}>
      <Input 
      type={type}
      placeholder={placeholder}
      {...register(name,validation)}  />
      {errors[name] && <InputErrorMessage msg={errors[name]?.message}/>}
      </div>
  )



  return (
    <div className="max-w-md mx-auto">
      <h2 className="text-center mb-4 text-3xl font-semibold">Register to get access!</h2>
      <form className="space-y-4"  onSubmit={handleSubmit(onSubmit)}>
        {renderRegisterForm}    
        <Button fullWidth isLoading={isLoading}> Register</Button>
      </form>
    </div>
  );
};

export default RegisterPage;
