'use client'
import { useState, useMemo, memo  } from "react";
import { useRouter } from 'next/navigation';
import { useAuth } from "../context/AuthContext";

export default function Page(){
 
 const [email,setEmail] = useState('')
 const [password,setPassword] = useState('');
 const [isTouched,setIsTouched] = useState(false);
 const [error,setError] = useState('');

  const router = useRouter();
  const { login } = useAuth() 
 

  const validateForm = useMemo(() => {
    if (!email || !password) {
      setError("All fields are required.");
      return false;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Invalid email format.");
      return false;
    }
    if (password.length < 6) {
      setError("Password must be at least 6 characters.");
      return false;
    }
    setError('');
    return true;
  }, [email, password]);

  const PasswordErr = memo(() => (
    <p className="text-white bg-red-300 rounded-xl justify-center px-2">{error}</p>
  ));


 const handleSubmit = async (e:React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault();
    try{
        login()
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
        { isTouched && <PasswordErr/> }
      <button type='submit' disabled ={!validateForm} className="rounder w-full px-4 my-2 rounded-2xl border-gray-500 border-solid border-2 bg-red-500">Submit</button>
     </form>
    </div>
   </div> 
  )
}

