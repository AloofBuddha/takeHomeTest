import { createFileRoute } from '@tanstack/react-router'
import ConfigurableTable from '@/components/ConfigurableTable'
import tradesData from '@/data/homePage/trades.json'
import { TRADES_COLUMN_DEFS } from '@/data/columnDefs'
import { TRADES_TABLE_COLOR_CONFIG } from '@/config/tableConfigs'

export const Route = createFileRoute('/')({
	component: RouteComponent
})

function RouteComponent() {
	const processedColumnDefs = TRADES_COLUMN_DEFS.map((col) => {
		const processed = { ...col }
		if (['id', 'accountId', 'currency', 'lastUpdate'].includes(col.field || '')) {
			processed.initialHide = true
		}
		return processed
	})

	return (
		<div className="h-[calc(100vh-12rem)]">
			<ConfigurableTable
				data={tradesData}
				columnDefs={processedColumnDefs}
				tableId="trades"
				colorModeConfig={TRADES_TABLE_COLOR_CONFIG}
			/>
		</div>
	)
}
