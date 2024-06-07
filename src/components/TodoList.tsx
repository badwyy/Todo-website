// // import { useEffect, useState } from "react";
// import Button from "./ui/Button";
// import axiosinstance from "../config/axios.config";
// import {

//   useQuery,
// } from '@tanstack/react-query'

// const TodoList = () => { 
//   // const [surveys,setSurveys]=useState([]);
//   // const[isloading, setLoading] = useState(true)
//   const storageKey="loggedInUser";
//   const  userDataString=localStorage.getItem(storageKey);
//   const userData=userDataString?JSON.parse(userDataString):null;
//   // useEffect(()=>{
//   //   try{
//   //     axiosinstance.get('/users/me?populate=surveys' ,{
//   //       headers:{
//   //         Authorization: `Bearer ${userData.jwt}`
//   //       }
//   //     })
//   //     .then(res=>setSurveys(res.data.surveys))
//   //     .catch(err=>console.error('the error',err))
//   //   }catch(error){
//   //     console.log(error)
//   //   } finally{
//   //     setLoading(false)
//   //   }
    
//   // },[userData.jwt]);
//   // if (isloading) return <h3>loading...</h3>

//   const{isLoading,data}= useQuery({
//   // const{isLoading,data,error}= useQuery({
//     queryKey:['surveys'],
//     queryFn: async()=>{
//       const {data}=await axiosinstance.get("/users/me?populate=surveys",{
//         headers:{
//           Authorization:`Bearer ${userData.jwt}`
//         }
//       });
      
//       return data;
//     }
//   })
// console.log(data)
// // console.log({isLoading,data,error})

// if(isLoading) return  <h3>Loading surveys ... </h3>
// // if (error) return "an Error has occurred" + error.message


//   return (
    
    
    
    
// //     <div className="space-y-1 ">
// //       {
// //       data.surveys.lenght? data.surveys.map(survey=>(
// //           <div key={survey.id} className="flex flex-wrap items-center justify-between hover:bg-gray-100 duration-300 p-3 rounded-md even:bg-gray-100">
// //   <p className="w-full font-semibold block mb-2">1 - rate from 1-10 {survey.title}</p>
// //     <div className="flex items-center justify-end w-full space-x-3">
// //     <Button size={"sm"}>edit</Button>
// //           <Button variant={"danger"} size={"sm"}>
// //             remove
// //           </Button>
// //     </div>
// //   </div>
// //       )): <h3>No Surveys yet.</h3>
// //     }  
// // </div>
//     <div className="space-y-1 ">
//       {
//       data.surveys.length? data.surveys.map(survey=>(
//           <div key={survey.id} className="flex flex-wrap items-center justify-between hover:bg-gray-100 duration-300 p-3 rounded-md even:bg-gray-100">
//           <div className="flex items-center justify-end w-full space-x-3">
//           <p className="w-full font-semibold">1- first {survey.title}</p>
//           <Button size={"sm"}>Edit</Button>
//           <Button variant={"danger"} size={"sm"}>
//             Remove
//           </Button>
//         </div>
//           <div className="flex items-center justify-end w-full space-x-3">
//           <p className="w-full font-semibold">1- first {survey.title}</p>
//           <Button size={"sm"}>Edit</Button>
//           <Button variant={"danger"} size={"sm"}>
//             Remove
//           </Button>
//         </div>
//       </div>  
// )): <h3>No Surveys yet.</h3>
// }
    
// </div>
// );
// };

// export default TodoList;


// {/* <p className="w-full font-semibold block mb-2">1 - rate from 1-10 {survey.title}</p> */}
//   {/* <div className="flex items-center justify-end w-full space-x-3">
//     <input type="number" />
//   </div> */}
//   {/* <p className="w-full font-semibold block mt-2">1 - rate from 1-10 {survey.tittle}</p>
//   <p className="w-full font-semibold">2 - are you comfortable at the gym</p>
//   <div className="flex items-center justify-end w-full space-x-3">
//   <Button size={"sm"}>Yes</Button>
//         <Button variant={"danger"} size={"sm"}>
//           No
//         </Button>
//   </div> */}
//           {/* <div className="flex items-center justify-between hover:bg-gray-100 duration-300 p-3 rounded-md even:bg-gray-100"> */}

// //   //     {/* <Button size={"sm"}>Edit</Button>
// //   //     <Button variant={"danger"} size={"sm"}>
// //   //       Remove
// //   //     </Button> */}



// //   //   </div>

// //   // </div>
// // // ))}



// // // </div>
// // {/* <p className="w-full font-semibold">2 - are you comfortable at the gym</p>
// // <div className="flex items-center justify-end w-full space-x-3">
// // <Button size={"sm"}>Yes</Button>
// //       <Button variant={"danger"} size={"sm"}>
// //         No
// //       </Button>
// // </div> */}


// // {/* <div className="flex items-center justify-end w-full space-x-3">
// //   <input type="number" />
// // </div> */}
// // {/* <Button size={"sm"}>Edit</Button>
// //     <Button variant={"danger"} size={"sm"}>
// //       Remove
// //     </Button> */}

// // {/* <div className="flex items-center justify-between hover:bg-gray-100 duration-300 p-3 rounded-md even:bg-gray-100">
// // <p className="w-full font-semibold">2 - are you comfortable at the gym</p>
// // <div className="flex items-center justify-end w-full space-x-3">




// // <Button size={"sm"}>Yes</Button>
// // <Button variant={"danger"} size={"sm"}>
// // No
// // </Button>
// // </div>
// // </div> */}

// //       {/* <div className="flex items-center justify-between hover:bg-gray-100 duration-300 p-3 rounded-md even:bg-gray-100">
// //         <p className="w-full font-semibold">3 - Third Todo</p>
// //         <div className="flex items-center justify-end w-full space-x-3">
// //           <Button size={"sm"}>Edit</Button>
// //           <Button variant={"danger"} size={"sm"}>
// //             Remove
// //           </Button>
// //           <input type="text "  className="bg-orange-500"/>
// //         </div>
// //       </div>  */}
import Button from "./ui/Button";
import axiosinstance from "../config/axios.config";
import { useQuery } from '@tanstack/react-query';

const TodoList = () => { 
  const storageKey = "loggedInUser";
  const userDataString = localStorage.getItem(storageKey);
  const userData = userDataString ? JSON.parse(userDataString) : null;

  const { isLoading, data, error } = useQuery({
    queryKey: ['surveys'],
    queryFn: async () => {
      const { data } = await axiosinstance.get("/users/me?populate=surveys", {
        headers: {
          Authorization: `Bearer ${userData.jwt}`
        }
      });
      return data;
    }
  });

  if (isLoading) return <h3>Loading surveys...</h3>;
  if (error) return <h3>An error has occurred: {error.message}</h3>;

  return (
    <div className="space-y-1">
      {
        data.surveys.length ? data.surveys.map(survey => (
          <div key={survey.id} className="flex flex-wrap items-center justify-between hover:bg-gray-100 duration-300 p-3 rounded-md even:bg-gray-100">
            <div className="flex items-center justify-end w-full space-x-3">
            <p className="w-full font-semibold block mb-2"> {survey.title}</p>
              <Button size={"sm"}>Edit</Button>
              <Button variant={"danger"} size={"sm"}>Remove</Button>
            </div>
          </div>
        )) : <h3>No Surveys yet.</h3>
      }
    </div>
  );
};

export default TodoList;
