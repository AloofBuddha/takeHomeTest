import { HomeIcon } from '@heroicons/react/24/outline'
import { Link, useMatches } from '@tanstack/react-router'

export default function BreadCrumb() {
	const matches = useMatches()

	// Build breadcrumbs from route matches
	const breadcrumbs = matches
		.map((match) => {
			const pathname = match.pathname || '/'
			const segments = pathname.split('/').filter(Boolean)
			const label = segments.length === 0 ? 'Home' : segments[segments.length - 1]
			return {
				label,
				href: pathname
			}
		})
		.filter(
			(crumb, index, self) =>
				// Remove duplicates (e.g. multiple 'Home' entries)
				index === 0 || crumb.href !== self[index - 1].href
		)

	return (
		<div className="flex items-center text-slate-500 dark:text-slate-400 space-x-2 text-sm">
			{breadcrumbs.map(({ label, href }, i) => (
				<div key={href} className="flex items-center space-x-2">
					<Link to={href} className="hover:text-slate-900 dark:hover:text-slate-100 transition-colors flex items-center gap-1">
						{i === 0 ? <HomeIcon className="w-4 h-4" /> : <span>{decodeURIComponent(label)}</span>}
					</Link>
					<span>/</span>
				</div>
			))}
		</div>
	)
}
