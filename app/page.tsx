import { BlogList } from "@/components/blog-list";
import { PostListSkeleton } from "@/components/skeletons";
import { Suspense } from "react";

const getBlogData = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  return response.json();
}

export default async function Home() {
  const blog_posts = await getBlogData();
  return (
    <>
      <h1 className="text-xl font-bold text-center my-5">Latest Blogs</h1>
      <Suspense fallback={<PostListSkeleton />}>
        <BlogList blog_posts={blog_posts}></BlogList>
      </Suspense>
    </>
  );
}
