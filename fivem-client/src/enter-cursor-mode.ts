/**
 * CFX:ENTER_CURSOR_MODE
 *
 * 0x780DA86

 * Enters cursor mode, suppressing mouse movement to the game and displaying a mouse cursor instead. This function supportsSDK infrastructure and is not intended to be used directly from your code.
 * 
 * ------------------------------------------------------------------
 */
export function enterCursorMode(): void {
	const enterCursorMode_result = Citizen.invokeNative<void>('0x780DA86', );
	return enterCursorMode_result;
}