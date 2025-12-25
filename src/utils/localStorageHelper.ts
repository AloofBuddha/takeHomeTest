export const localStorageHelper = (key: string) => {
	const getItem = () => {
		if (typeof window !== 'undefined') {
			const item = window.localStorage.getItem(key)
			return item ? JSON.parse(item) : null
		}
		return null
	}

	const getNestedValue = (dictionaryKeys: string[]) => {
		if (window == undefined) {
			console.error('getNestedValue: window is not defined', window)
			return null
		}
		const item = getItem()
		if (!item) {
			return null
		}

		let result = item
		for (const key of dictionaryKeys) {
			if (result[key] !== undefined) {
				result = result[key]
			} else {
				return null
			}
		}
		return result
	}

	const setNestedValue = (dictionaryKeys: string[], value: unknown) => {
		if (window == undefined) {
			console.error('setNestedValue: window is not defined', window)
			return
		}

		let prev = getItem()
		if (prev == undefined) {
			prev = {}
		}
		// Traverse the keys to find the last key in the nested structure
		let current = prev

		for (let i = 0; i < dictionaryKeys.length - 1; i++) {
			const key = dictionaryKeys[i]
			if (current[key] === undefined) {
				current[key] = {}
			}
			current = current[key]
		}
		const lastKey = dictionaryKeys[dictionaryKeys.length - 1]

		current[lastKey] = value
		window.localStorage.setItem(key, JSON.stringify(prev))
	}

	return { getNestedValue, setNestedValue }
}
