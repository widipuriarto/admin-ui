import React from "react";
// 1. Mengimpor komponen dan data statis
import PostCard from "./PostCard";
import { posts } from "./postsData";

function Exercise() {
  return (

    <div className="min-h-screen bg-gray-100 p-6">

      <h1 className="text-3xl font-bold text-center mb-8 text-special-red2">
        Post Cards
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-full px-10 mx-auto">
        {posts.map((post) => (
          <PostCard 
            key={post.id} 
            id={post.id}
            userId={post.userId}
            title={post.title}
            body={post.body}
          />
        ))}
      </div>

    </div>
  );
}

export default Exercise;
