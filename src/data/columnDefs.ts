import { ColDef } from 'ag-grid-community'

export const TRADES_COLUMN_DEFS: ColDef[] = [
	{ field: 'id', headerName: 'Trade ID', minWidth: 120 },
	{ field: 'status', headerName: 'Status', minWidth: 100 },
	{ field: 'accountId', headerName: 'Account ID', minWidth: 120 },
	{ field: 'positionId', headerName: 'Position ID', minWidth: 120 },
	{ field: 'price', headerName: 'Price', type: 'numericColumn', valueFormatter: (params) => `$${params.value?.toFixed(2)}` },
	{ field: 'quantity', headerName: 'Quantity', type: 'numericColumn' },
	{ field: 'side', headerName: 'Side', minWidth: 80 },
	{ field: 'ticker', headerName: 'Ticker', minWidth: 80 },
	{ field: 'orderTime', headerName: 'Order Time', minWidth: 160, valueFormatter: (params) => new Date(params.value).toLocaleString() },
	{ field: 'lastUpdate', headerName: 'Last Update', minWidth: 160, valueFormatter: (params) => new Date(params.value).toLocaleString() },
	{ field: 'currency', headerName: 'Currency', minWidth: 80 }
]

export const CREDIT_COLUMN_DEFS: ColDef[] = [
	{ field: 'id', headerName: 'Credit ID', minWidth: 120 },
	{ field: 'counterpartyId', headerName: 'Counterparty ID', minWidth: 140 },
	{ field: 'counterpartyName', headerName: 'Counterparty Name', minWidth: 200 },
	{ field: 'creditRating', headerName: 'Credit Rating', minWidth: 120 },
	{ field: 'exposure', headerName: 'Exposure', type: 'numericColumn', valueFormatter: (params) => `$${params.value?.toLocaleString()}` },
	{ field: 'collateral', headerName: 'Collateral', type: 'numericColumn', valueFormatter: (params) => `$${params.value?.toLocaleString()}` },
	{ field: 'netExposure', headerName: 'Net Exposure', type: 'numericColumn', valueFormatter: (params) => `$${params.value?.toLocaleString()}` },
	{ field: 'riskLimit', headerName: 'Risk Limit', type: 'numericColumn', valueFormatter: (params) => `$${params.value?.toLocaleString()}` },
	{ field: 'utilizationPercent', headerName: 'Utilization %', type: 'numericColumn', valueFormatter: (params) => `${params.value?.toFixed(2)}%` }
]

export const HOLDINGS_COLUMN_DEFS: ColDef[] = [
	{ field: 'id', headerName: 'Holding ID', minWidth: 120 },
	{ field: 'portfolioId', headerName: 'Portfolio ID', minWidth: 120 },
	{ field: 'symbol', headerName: 'Symbol', minWidth: 100 },
	{ field: 'quantity', headerName: 'Quantity', type: 'numericColumn' },
	{ field: 'marketValue', headerName: 'Market Value', type: 'numericColumn', valueFormatter: (params) => `$${params.value?.toLocaleString()}` },
	{ field: 'costBasis', headerName: 'Cost Basis', type: 'numericColumn', valueFormatter: (params) => `$${params.value?.toLocaleString()}` },
	{ field: 'unrealizedGainLoss', headerName: 'Unrealized P&L', type: 'numericColumn', valueFormatter: (params) => `$${params.value?.toLocaleString()}` },
	{ field: 'weight', headerName: 'Weight', type: 'numericColumn', valueFormatter: (params) => `${(params.value * 100)?.toFixed(2)}%` },
	{ field: 'sector', headerName: 'Sector', minWidth: 150 }
]

export const RISK_COLUMN_DEFS: ColDef[] = [
	{ field: 'id', headerName: 'Risk ID', minWidth: 120 },
	{ field: 'portfolioId', headerName: 'Portfolio ID', minWidth: 120 },
	{ field: 'riskType', headerName: 'Risk Type', minWidth: 140 },
	{ field: 'VaR', headerName: 'VaR', type: 'numericColumn', valueFormatter: (params) => `$${params.value?.toLocaleString()}` },
	{ field: 'expectedShortfall', headerName: 'Expected Shortfall', type: 'numericColumn', valueFormatter: (params) => `$${params.value?.toLocaleString()}` },
	{ field: 'volatility', headerName: 'Volatility', type: 'numericColumn', valueFormatter: (params) => `${(params.value * 100)?.toFixed(2)}%` },
	{ field: 'beta', headerName: 'Beta', type: 'numericColumn', valueFormatter: (params) => params.value?.toFixed(2) },
	{ field: 'correlation', headerName: 'Correlation', type: 'numericColumn', valueFormatter: (params) => params.value?.toFixed(2) },
	{ field: 'riskDate', headerName: 'Risk Date', minWidth: 160, valueFormatter: (params) => new Date(params.value).toLocaleString() }
]

export const TRANSACTIONS_COLUMN_DEFS: ColDef[] = [
	{ field: 'id', headerName: 'Transaction ID', minWidth: 140 },
	{ field: 'accountId', headerName: 'Account ID', minWidth: 120 },
	{ field: 'transactionType', headerName: 'Type', minWidth: 100 },
	{ field: 'amount', headerName: 'Amount', type: 'numericColumn', valueFormatter: (params) => `$${params.value?.toLocaleString()}` },
	{ field: 'currency', headerName: 'Currency', minWidth: 80 },
	{ field: 'description', headerName: 'Description', minWidth: 200 },
	{ field: 'category', headerName: 'Category', minWidth: 140 },
	{ field: 'timestamp', headerName: 'Timestamp', minWidth: 160, valueFormatter: (params) => new Date(params.value).toLocaleString() },
	{ field: 'status', headerName: 'Status', minWidth: 100 },
	{ field: 'reference', headerName: 'Reference', minWidth: 160 },
	{ field: 'counterparty', headerName: 'Counterparty', minWidth: 180 },
	{ field: 'fees', headerName: 'Fees', type: 'numericColumn', valueFormatter: (params) => `$${params.value?.toFixed(2)}` }
]
