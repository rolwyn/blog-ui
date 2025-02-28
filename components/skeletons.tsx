import { Skeleton } from "@/components/ui/skeleton";

export function PostListSkeleton() {
	return (
		<div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 py-4">
			{[...Array(9)].map((_, i) => (
				<div key={i} className="rounded-lg border p-6 space-y-4 mx-2 bg-white">
					<Skeleton className="w-3/4 h-8" />
					<Skeleton className="w-full h-4" />
					<Skeleton className="w-1/3 h-4" />
				</div>
			))}
		</div>
	)
}

export function BlogContentSkeleton() {
	return (
		<div className="space-y-4 mb-6">
			<Skeleton className="w-3/4 h-8" />
			<Skeleton className="w-full h-4" />
		</div>
	) 
}

export function CommentSkeleton() {
	return (
		<div className="space-y-6 py-6">
			<Skeleton className="h-6 w-1/4" />
			{[...Array(5)].map((_, i) => (
				<div  key={i} className="space-y-3 pl-4">
					<div className="flex gap-2">
						<Skeleton className="w-24 h-4" />
						<Skeleton className="w-32 h-4" />
					</div>
					<Skeleton className="h-4 w-full" />
					<Skeleton className="h-4 w-5/6" />
				</div>
			))}
		</div>
	)
}