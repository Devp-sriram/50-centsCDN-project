import { fetchData } from '../utils/fetchData';
import ClientOpsPage from '../components/ClientOpsPage';
import { Card } from '../components/ClientOpsPage'; // Import from your types file

interface PageProps {
  initialPosts: Card[];
}

export async function getStaticProps(): Promise<{ props: PageProps }> {
  const response = await fetchData();
  
  // Transform API data to match Card type if needed
  const initialPosts: Card[] = response.data.map((post: any) => ({
    id: post.id,
    title: post.title,
    body: post.body
    // Map other fields if necessary
  }));

  return {
    props: {
      initialPosts,
    },
  };
}

export default function Page({ initialPosts }: PageProps) {
  return <ClientOpsPage initialPosts={initialPosts} />;
}
