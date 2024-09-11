/**
 * CFX:SEND_DUI_MESSAGE
 *
 * 0XCD380DA9

 * Sends a message to the specific DUI root page. This is similar to SEND\_NUI\_MESSAGE.
 * 
 * ------------------------------------------------------------------
 * @param {number} duiObject The DUI browser handle.
 * @param {string} jsonString The message, encoded as JSON.
 */
export function sendDuiMessage(duiObject: number, jsonString: string): void {
	const sendDuiMessage_result = Citizen.invokeNative<void>('0XCD380DA9', duiObject, jsonString);
	return sendDuiMessage_result;
}