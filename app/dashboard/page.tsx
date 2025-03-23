'use client'
// hooks
import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation';
import { useAuth } from '../context/AuthContext';
// fetch fn
import { fetchData } from '../utils/fetchData';
// ui components
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "../components/app-sidebar"
import Card,{ card } from '../components/Card';
import { Alert, AlertDescription } from "@/components/ui/alert"
import { AlertTriangle } from "lucide-react"

export default function Page() {
  // states
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);


  const router = useRouter();
  const { isAuthenticated } = useAuth();
  
  useEffect(() => {
    const token = localStorage.getItem("token");
    
    if (!token || !isAuthenticated) {
      router.push("/login");
      return;
    }

    fetchData()                                                                                                                                                                                

      .then((res) => {
        if(res){
          setData(res.data);
        }
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
  }, [isAuthenticated]);

  if (loading) return <div>Loading...</div>;
  if (error) return( 
          <Alert variant="destructive" className="mt-2">
            <AlertTriangle className="h-4 w-4" />
            <AlertDescription>
                  {error}
            </AlertDescription>
          </Alert>
  )
;

  return (
    <>
      <SidebarProvider>
      <AppSidebar/>
      <SidebarTrigger/>
      <div className="px-5 py-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {data.map((card : card) => (
          <Card
            key={card.id}
            title={card.title}
            body={card.body}
          />
        ))}
      </div>
      </SidebarProvider>
    </>
  )
}
