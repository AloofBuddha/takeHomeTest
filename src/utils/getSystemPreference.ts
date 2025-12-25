export const getSystemPreference = (): boolean => {
	// Check if browser supports prefers-color-scheme
	const darkQuery = window.matchMedia('(prefers-color-scheme: dark)')
	const lightQuery = window.matchMedia('(prefers-color-scheme: light)')

	// If neither matches, browser doesn't support it - default to dark
	if (!darkQuery.matches && !lightQuery.matches) {
		return true // Default to dark when no system preference
	}

	return darkQuery.matches
}
