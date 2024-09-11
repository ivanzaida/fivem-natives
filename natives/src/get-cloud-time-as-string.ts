/**
 * NETWORK:GET_CLOUD_TIME_AS_STRING
 *
 * 0x9D75306730D4D730

 * Return cloud time as string (in seconds since midnight 1970-01-01)
 * Same as GET_CLOUD_TIME_AS_INT but returns the value as a hex string (%I64X).
 * 
 * ------------------------------------------------------------------
 * @returns {string}  
 */
export function getCloudTimeAsString(): string {
	const getCloudTimeAsString_result = Citizen.invokeNative<string>('0x9D75306730D4D730', );
	return getCloudTimeAsString_result;
}