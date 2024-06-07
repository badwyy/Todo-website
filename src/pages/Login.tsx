import { useState } from "react";
import InputErrorMessage from "../components/InputErrorMessage";
import Button from "../components/ui/Button";
import Input from "../components/ui/Input";
import { Login_Form } from "../data";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup"
import { LoginSchema } from "../validation";
import axiosinstance from "../config/axios.config";
import toast from "react-hot-toast";
import { AxiosError } from "axios";
import { IerrorResponse } from "../interfaces";
// import {  useNavigate } from "react-router-dom";


interface IFormInput {
  identifier: string
  password: string
}
const LoginPage = () => {
  // const navigate =useNavigate()

  const[isLoading,setIsLoasing]=useState(false);
  const { register, handleSubmit,
    formState:{errors} 
  } = useForm<IFormInput>({
    resolver: yupResolver(LoginSchema)
  });

  // handlers
  const onSubmit: SubmitHandler<IFormInput> = async data =>{ 
    console.log(data);
    setIsLoasing(true);
  // console.log(errors)
  
  try { 
    const {status,data:resData}= await axiosinstance.post("/auth/local",data);
    console.log(resData)
    if(status==200) {
      // console.log("Success message will be displayed");
      toast.success("you will navigate to the home  page in 2 seconds!",
      {
        position:"bottom-center",
        duration : 1500,
        style:{
          backgroundColor:"black",
          color:"white",
          width:"fit-content",
        },
      });

      localStorage.setItem('loggedInUser',JSON.stringify(resData));

      setTimeout(()=>{ 
        location.replace('/');
        location.reload()
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
  const renderLoginForm=Login_Form.map(({name,placeholder,type,validation},idx)=>
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
      <h2 className="text-center mb-4 text-3xl font-semibold">Login to get access!</h2>
      <form className="space-y-4"  onSubmit={handleSubmit(onSubmit)}>
      {renderLoginForm}

      <Button fullWidth isLoading={isLoading}>Login</Button>
      </form>
    </div>
  );
};

export default LoginPage;
