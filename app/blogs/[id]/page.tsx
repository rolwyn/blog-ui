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

export default async function BlogPage({
	params,
}: {
	params: Promise<{ id: string }>
}
) {
	const id = (await params).id;
	const blogDetails = getBlogDatails(id);
	const commentDetails = getComments(id);
	const [blog, comments] = await Promise.all([blogDetails, commentDetails])
	return (
		<>
			<article className="max-w-3xl mx-auto py-6 px-6 md:px-0">
				<div className="space-y-4">
					<h1 className="text-3xl font-bold capitalize text-sky-950">{blog.title}</h1>
					<p className="text-md">{blog.body}</p>
				</div>
			</article>

			<section className="max-w-3xl mx-auto py-6 px-6 md:px-0">
				<h3 className="text-xl font-semibold mb-4 text-sky-950">Comments <span>({comments.length})</span></h3>
				<div className="space-y-4">
					{
						comments.map((comment: Comment) => (
							<div
								key={comment.id}
								className="flex flex-row"
							>
								<div className="flex mb-2 flex-col">
									<div className="text-md text-sky-600">{comment.name}</div>
									<div className="text-sm">{comment.body}</div>
								</div>
							</div>
						))
					}
				</div>
			</section>
		</>
	)
}