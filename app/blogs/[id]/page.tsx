import { BlogContentSkeleton, CommentSkeleton } from "@/components/skeletons"
import { Skeleton } from "@/components/ui/skeleton"
import { Suspense } from "react"

interface Comment {
  postId: number
  id: number
  name: string
  email: string
  body: string
}

const getBlogDatails = async (id: string) => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  return response.json();
}

const getComments = async (id: string) => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`);
  return response.json();
}


const BlogContent = async ({ id }: { id: string }) => {
  const blog = await getBlogDatails(id);
  return (
		<article className="max-w-3xl mx-auto py-6 px-6 md:px-0">
			<div className="space-y-4">
				<h1 className="text-3xl font-bold capitalize text-sky-950">{blog.title}</h1>
				<p className="text-md">{blog.body}</p>
			</div>
		</article>
  )
}

const Comments = async ({ id }: { id: string }) => {
	const comments = await getComments(id);
	return (
		<div className="space-y-6">
			{
				<>
					<h3 className="text-xl font-semibold mb-4 text-sky-950">Comments <span>({comments.length})</span></h3>
					{comments.map((comment: Comment) => (
						<div
							key={comment.id}
							className="pl-4 border-l-2 border-sky-500"
						>
							<div className="flex flex-row mb-2 items-center gap-2">
								<span className="text-md text-sky-600">{comment.name}</span>
								<span className="text-sm">{comment.email}</span>
							</div>
							<p>{comment.body}</p>
						</div>
					))}
				</>
			}
		</div>
	)
}


export default async function BlogPage({
	params,
}: {
	params: Promise<{ id: string }>
}
) {
	const id = (await params).id;
	return (
		<article className="max-w-3xl mx-auto py-6 px-6 md:px-0 space-y-6 pb-40">
			<Suspense fallback={<BlogContentSkeleton />}>
				<BlogContent id={id} />
			</Suspense>

			<section className="mt-12">
				<Suspense fallback={<CommentSkeleton />}>
					<Comments id={id} />
				</Suspense>
			</section>
		</article>
	)
}