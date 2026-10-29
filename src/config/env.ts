export function readApiBaseUrlFromEnv(): string {
	const value = process.env["API_BASE_URL"]
	if (!value) throw new Error("API_BASE_URL is not set")
	return value
}
