import Link from "next/link"

interface Post {
	userId: number
	id: number
	title: string
	body: string
}

export function BlogList() {
	return (
		<div className="grid gap-6 lg:grid-cols-3 md:grid-cols-2">
			<article className="rounded-lg border p-6 m-2">
				<Link href={'#'} className="block space-y-3">
					<h2 className="text-xl font-semibold">Title</h2>
					<p>Body</p>
					<div className="text-sm">Read more →</div>
				</Link>
			</article>
			<article className="rounded-lg border p-6 m-2">
				<Link href={'#'} className="block space-y-3">
					<h2 className="text-xl font-semibold">Title</h2>
					<p>Body</p>
					<div className="text-sm">Read more →</div>
				</Link>
			</article>
			<article className="rounded-lg border p-6 m-2">
				<Link href={'#'} className="block space-y-3">
					<h2 className="text-xl font-semibold">Title</h2>
					<p>Body</p>
					<div className="text-sm">Read more →</div>
				</Link>
			</article>
	</div>
	)
}