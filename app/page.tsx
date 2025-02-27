import { BlogList } from "@/components/blog-list";
import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";

export default function Home() {
  return (
    <>
      <h1 className="text-3xl font-bold text-center my-5">Latest Blogs</h1>
      <Suspense fallback={<h1>We are waiting for data</h1>}>
        <BlogList></BlogList>
      </Suspense>
    </>
  );
}
