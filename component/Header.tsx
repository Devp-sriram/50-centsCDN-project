'use client'
import Link from 'next/link';
import { useAuth } from '../context/AuthContext';


export default function Header(){

  const { isAuthenticated } = useAuth();
  const { logout } = useAuth();

  return (
  <nav className="w-full h-10 flex justify-between p-2">
    <ul className="flex gap-4 py-1 md:ml-15 ">
      <li><Link href="/">Home</Link></li>
      { isAuthenticated === true &&
      <li> <Link href="/dashboard">dashboard</Link> </li> 
      }
      </ul>
    {!isAuthenticated ?
      <>
        <ul className="flex gap-4 py-1">
          <li> <Link href="/login">Login</Link> </li>
        </ul>
      </>
      :
      <>
        <div className="flex gap-4 py-1">
          <span>welcome</span>
          <button onClick={logout}>logout</button>
        </div>
      </>
    }
  </nav>
  )
}
