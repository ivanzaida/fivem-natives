/**
 * CFX:LEAVE_CURSOR_MODE
 *
 * 0xADECF19E

 * Leaves cursor mode. This function supports SDK infrastructure and is not intended to be used directly from your code.
 * 
 * ------------------------------------------------------------------
 */
export function leaveCursorMode(): void {
	const leaveCursorMode_result = Citizen.invokeNative<void>('0xADECF19E', );
	return leaveCursorMode_result;
}