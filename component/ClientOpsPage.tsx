'use client';

import { useState } from 'react';
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "./app-sidebar";
import Card,{card} from './Card';
import  ProtectedRoute  from './ProtectedRoute';

const ITEMS_PER_PAGE = 5;

interface ClientOpsPageProps {
  initialPosts: card[];
}

export default function PostsClient({ initialPosts }:ClientOpsPageProps) {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');

  // Filter posts based on search term
  const filteredPosts = initialPosts.filter((post:card) => 
    post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.body.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Pagination logic
  const totalPages = Math.ceil(filteredPosts.length / ITEMS_PER_PAGE);
  const currentPosts = filteredPosts.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  return (
    <>
      <SidebarProvider>
        <ProtectedRoute>
        <AppSidebar />
        <SidebarTrigger/>
      <div className='flex flex-col'>
        {/* Search Filter */}
        <div className="px-5 py-3">
          <input
            type="text"
            placeholder="Search posts..."
            className="w-full p-2 border rounded"
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
              setCurrentPage(1); // Reset to first page when searching
            }}
          />
        </div>

        {/* Posts Grid */}
        <div className="px-5 py-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {currentPosts.map((post : card) => (
            <Card
              key={post.id}
              title={post.title}
              body={post.body}
            />
          ))}
        </div>

        {/* Pagination Controls */}
        {totalPages > 1 && (
          <div className="flex justify-center gap-2 py-4">
            <button
              onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
              disabled={currentPage === 1}
              className="px-4 py-2 border rounded disabled:opacity-50"
            >
              Previous
            </button>
            
            <span className="px-4 py-2">
              Page {currentPage} of {totalPages}
            </span>
            
            <button
              onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
              disabled={currentPage === totalPages}
              className="px-4 py-2 border rounded disabled:opacity-50"
            >
              Next
            </button>
          </div>
        )}
        </div>
        </ProtectedRoute>
      </SidebarProvider>
    </>
  );
}
