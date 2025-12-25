import { createFileRoute } from '@tanstack/react-router'
import { useState, useEffect } from 'react'
import CandleStick from '@/components/CandleStick'
import aaplData from '@/data/candleStick/aapl.json'
import msftData from '@/data/candleStick/msft.json'
import tslaData from '@/data/candleStick/tsla.json'
import { AVAILABLE_SYMBOLS, DEFAULT_SYMBOL, type SymbolId } from '@/config/candlestickConfig'
import { cn } from '@/utils/cn'

export const Route = createFileRoute('/candle-sticks')({
	component: RouteComponent
})

const SYMBOL_DATA_MAP = {
	AAPL: aaplData,
	MSFT: msftData,
	TSLA: tslaData
} as const

function RouteComponent() {
	const [selectedSymbol, setSelectedSymbol] = useState<SymbolId>(() => {
		const saved = localStorage.getItem('candlestick-selected-symbol')
		return (saved as SymbolId) || DEFAULT_SYMBOL
	})
	useEffect(() => {
		localStorage.setItem('candlestick-selected-symbol', selectedSymbol)
	}, [selectedSymbol])

	const currentSymbol = AVAILABLE_SYMBOLS.find((s) => s.id === selectedSymbol) || AVAILABLE_SYMBOLS[0]
	const priceData = SYMBOL_DATA_MAP[selectedSymbol]

	return (
		<div className="flex flex-col gap-3">
			<div className="flex items-center gap-2 flex-shrink-0">
				<label 
					htmlFor="symbol-select" 
					className="text-xs font-medium text-slate-600 dark:text-slate-400"
				>
					Symbol:
				</label>
				<select
					id="symbol-select"
					value={selectedSymbol}
					onChange={(e) => setSelectedSymbol(e.target.value as SymbolId)}
					className={cn(
						"px-2 py-1 text-sm border rounded",
						"border-slate-300 dark:border-slate-600",
						"bg-white dark:bg-slate-800",
						"text-slate-900 dark:text-slate-100",
						"focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400",
						"cursor-pointer"
					)}
				>
					{AVAILABLE_SYMBOLS.map((symbol) => (
						<option key={symbol.id} value={symbol.id}>
							{symbol.label}
						</option>
					))}
				</select>
				<span className="text-xs text-slate-500 dark:text-slate-400 ml-2">
					{currentSymbol.name}
				</span>
			</div>

		<div className="h-[460px]">
			<CandleStick 
				key={selectedSymbol}
				priceData={priceData} 
				symbolId={selectedSymbol}
				title={`${currentSymbol.id}`}
			/>
		</div>
		</div>
	)
}
