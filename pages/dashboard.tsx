import { fetchData } from '../utils/fetchData';
import ClientOpsPage from '../component/ClientOpsPage';
import { card } from '../component/Card'; // Import your Card type

interface PageProps {
  initialData: card[]; // Should match what you return in getStaticProps
}

export async function getStaticProps(): Promise<{ props: PageProps }> {
  try {
    const data = await fetchData();
    
    // Validate data structure
    if (!Array.isArray(data)) {
      throw new Error('Expected array from fetchData');
    }
    
    return {
      props: { 
        initialData: data 
      },
    };
  } catch (error) {
    console.error('Error in getStaticProps:', error);
    return {
      props: { 
        initialData: [] // Fallback empty array
      }
    };
  }
}

export default function Dashboard({ initialData }: PageProps) {
  return <ClientOpsPage initialPosts={initialData} />;
}

