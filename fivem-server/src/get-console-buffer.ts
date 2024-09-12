/**
 * CFX:GET_CONSOLE_BUFFER
 *
 * 0xE57429FA

 * Returns the current console output buffer.
 * 
 * ------------------------------------------------------------------
 * @returns {string}  The most recent game console output, as a string.
 */
export function getConsoleBuffer(): string {
	const getConsoleBuffer_result = Citizen.invokeNative<string>('0xE57429FA', );
	return getConsoleBuffer_result;
}