export function readRequestTimeoutMs(): number {
	const value = process.env["REQUEST_TIMEOUT_MS"]
	if (!value) return 5000
	const parsed = Number(value)
	if (!Number.isFinite(parsed) || parsed <= 0) throw new Error("REQUEST_TIMEOUT_MS must be a positive number")
	return parsed
}
