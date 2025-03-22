'use client'
import { useState } from "react";
import { useRouter } from 'next/navigation';
import { useAuth } from "../context/AuthContext";

export default function Page(){
 
 const [email,setEmail] = useState('')
 const [password,setPassword] = useState('');
 const [isTouched,setIsTouched] = useState(false);

 const router = useRouter();
  const { login  } = useAuth() 
 

 const PasswordErr =()=>{
  return(
     <p className="text-white bg-red-300 rounded-xl justify-center p-1"> password must be 8 character or above</p>
  )
 };

 const isValid = () =>{
  return (
    email && password.length >= 8 ? true :false
  ) 
 }

 const handleSubmit = async (e:React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault();
    try{
        login({email,password})
        router.push('/dashboard')
    }catch(err){
       console.log(err) 
    }
}

  return (
   <div className="w-full h-full p-10 flex justify-center items-start ">
    <div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-4 justify-center items-center border-gray-500 border-solid border-2">
     <form onSubmit={handleSubmit} className="flex flex-col w-full gap-2">
      <label>Email</label>
      <input 
        type="email" 
        placeholder="example@mail.com"
        value={email} 
        onChange={(e)=>setEmail(e.target.value)}
        className="text-white rounded "
      />
      <label>Password</label>
      <input 
        type="password" 
        placeholder="min 8 & atleast 1 Uppercase"
        value={password} 
        onChange={(e)=>setPassword(e.target.value)}
        onBlur ={()=>setIsTouched(true)}
        className="text-white rounded"
      />  
        {password.length <= 8 && isTouched && <PasswordErr/> }
      <button type='submit' disabled ={!isValid()} className="rounder w-full px-4 my-2 rounded-2xl border-gray-500 border-solid border-2 bg-red-500">Submit</button>
     </form>
    </div>
   </div> 
  )
}

