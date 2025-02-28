import Link from "next/link"

interface Post {
	userId: number
	id: number
	title: string
	body: string
}

export function BlogList({blog_posts}: {blog_posts: Post[]}) {
	return (
		<div className="grid md:gap-6 lg:grid-cols-2 md:grid-cols-2 md:px-10 md:py-4">
			{blog_posts.map((blog: Post) => (
				<article key={blog.id} className="rounded-lg border p-6 m-2 mx-2 bg-white shadow-sm transition-all hover:shadow-md">
					<Link href={`/blogs/${blog.id}`} className="block space-y-3">
						<div className="flex justify-center">
							<div className="m-5">
								<div className="relative h-23 w-23 rounded-full overflow-hidden shadow-lg">
									<img
										src="https://picsum.photos/200/300"
										alt="User Avatar"
										className="h-full w-full object-cover"
									/>
								</div>
							</div>
							<div className="space-y-3">
								<h2 className="text-xl font-semibold text-sky-950">{blog.title}</h2>
								<p className="line-clamp-2">{blog.body}</p>
								<div className="text-sm">Read more...</div>
							</div>
						</div>
					</Link>
				</article>
			))}
		</div>
	)
}