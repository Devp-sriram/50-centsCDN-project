'use client'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation';
import { useAuth } from '../context/AuthContext';
import Card from '../components/Card';
import { fetchData } from '../utils/fetchData';

export default function Page() {
  const router = useRouter();
  const { isAuthenticated } = useAuth();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    
    if (!token || !isAuthenticated) {
      router.push("/login");
      return;
    }

    fetchData()
      .then((res) => {
        setData(res.data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
  }, [isAuthenticated]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <>
      <div className="px-5 py-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {data.map((card) => (
          <Card
            key={card.id}
            title={card.title}
            body={card.body}
          />
        ))}
      </div>
    </>
  )
}
