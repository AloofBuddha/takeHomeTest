import TradesTable from '@/components/TradesTable'
import { createFileRoute } from '@tanstack/react-router'
import tradesData from '@/data/homePage/trades.json'
import { TRADES_COLUMN_DEFS } from '@/data/columnDefs'

export const Route = createFileRoute('/')({
	component: RouteComponent
})

function RouteComponent() {
	return (
		<div className="h-[calc(100vh-12rem)]">
			<TradesTable trades={tradesData} columnDefs={TRADES_COLUMN_DEFS} />
		</div>
	)
}
