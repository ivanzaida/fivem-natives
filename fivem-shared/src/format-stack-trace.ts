/**
 * CFX:FORMAT_STACK_TRACE
 *
 * 0xD70C3BCA

 * An internal function for converting a stack trace object to a string.
 * 
 * ------------------------------------------------------------------
 * @param {any} traceData
 * @returns {string}  
 */
export function formatStackTrace(traceData: any): string {
	const formatStackTrace_result = Citizen.invokeNative<string>('0xD70C3BCA', traceData);
	return formatStackTrace_result;
}