// hooks
import { useState, useMemo} from "react";
import { useRouter } from 'next/router';
import { useAuth } from "../context/AuthContext";

//ui components
import { Card } from '@/components/ui/card'
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { AlertTriangle } from "lucide-react"
import { Button } from "@/components/ui/button";


export default function Page(){
 
 // states 
 const [email,setEmail] = useState('')
 const [password,setPassword] = useState('');
 const [isTouched,setIsTouched] = useState(false);
 const [error,setError] = useState('');

 const router = useRouter();
 const { login } = useAuth(); 
 

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

{/*const PasswordErr = memo(() => (
    <p className="text-white bg-red-300 rounded-xl justify-center px-2">{error}</p>
  ));
*/}


 const handleSubmit = async (e:React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault();
    try{
        login ? login() : ''
        router.push('/dashboard')
    }catch(err){
       console.log(err) 
    }
}

  return (
   <Card className="w-full h-full p-10 flex justify-center items-center">
    <Card className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-4 justify-center items-center border-gray-500 border-solid border-2">
     <form onSubmit={handleSubmit} className="flex flex-col w-full gap-2">
      <Label>Email</Label>
      <Input 
        type="email" 
        placeholder="example@mail.com"
        value={email} 
        onChange={(e)=>setEmail(e.target.value)}
        className="text-black rounded "
      />
      <Label>Password</Label>
      <Input 
        type="password" 
        placeholder="min 8 & atleast 1 Uppercase"
        value={password} 
        onChange={(e)=>setPassword(e.target.value)}
        onBlur ={()=>setIsTouched(true)}
        className="text-black rounded"
      />  
        { isTouched &&
          <Alert variant="destructive" className="mt-2">
            <AlertTriangle className="h-4 w-4" />
            <AlertDescription>
                  {error}
            </AlertDescription>
          </Alert>
        }
      <Button type='submit' disabled ={!validateForm} className="rounder w-full px-4 my-2 rounded-2xl border-gray-500 border-solid border-2 bg-red-600">Submit</Button>
     </form>
    </Card>
   </Card> 
  )
}
