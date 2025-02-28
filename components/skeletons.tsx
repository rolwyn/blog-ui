import { Skeleton } from "@/components/ui/skeleton";

export function PostListSkeleton() {
	return (
		<div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 py-4">
			{[...Array(9)].map((_, i) => (
				<div key={i} className="rounded-lg border p-6 space-y-4 mx-2">
					<Skeleton className="w-3/4 h-8" />
					<Skeleton className="w-full h-4" />
					<Skeleton className="w-1/3 h-4" />
				</div>
			))}
		</div>
	)
}