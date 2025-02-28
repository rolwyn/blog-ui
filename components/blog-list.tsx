import Link from "next/link"
import { Skeleton } from "./ui/skeleton"

interface Post {
	userId: number
	id: number
	title: string
	body: string
}

export function BlogList({blog_posts}: {blog_posts: Post[]}) {
	return (
		<div className="grid gap-6 lg:grid-cols-3 md:grid-cols-2 px-10 py-4">
			{blog_posts.map((blog) => (
				<article key={blog.id} className="rounded-lg border p-6 m-2 mx-2">
					<Link href={`/blogs/${blog.id}`} className="block space-y-3">
						<h2 className="text-xl font-semibold underline">{blog.title}</h2>
						<p className="line-clamp-2">{blog.body}</p>
						<div className="text-sm">Read more...</div>
					</Link>
				</article>
			))}
		</div>
	)
}