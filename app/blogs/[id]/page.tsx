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

export default async function BlogPage({
	params,
}: {
	params: Promise<{ id: string }>
}
) {
	const id = (await params).id;
	const blogDetails = getBlogDatails(id);
	const [blogData] = await Promise.all([blogDetails])
	return (
		<article className="max-w-3xl mx-auto py-6">
			<div className="space-y-4">
				<h1 className="text-3xl font-bold">{blogData.title}</h1>
				<p className="text-md">{blogData.body}</p>
			</div>
		</article>
	)
}