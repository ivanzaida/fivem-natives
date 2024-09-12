/**
 * CFX:PRINT_STRUCTURED_TRACE
 *
 * 0X90892DED

 * Prints 'structured trace' data to the server `file descriptor 3` channel. This is not generally useful outside ofserver monitoring utilities.
 * 
 * ------------------------------------------------------------------
 * @param {string} jsonString JSON data to submit as payload in the script_structured_trace event.
 */
export function printStructuredTrace(jsonString: string): void {
	const printStructuredTrace_result = Citizen.invokeNative<void>('0X90892DED', jsonString);
	return printStructuredTrace_result;
}