/**
 * CFX:SEND_DUI_MOUSE_UP
 *
 * 0X1D735B93

 * Injects a 'mouse up' event for a DUI object. Coordinates are expected to be set using SEND\_DUI\_MOUSE\_MOVE.
 * 
 * ------------------------------------------------------------------
 * @param {number} duiObject The DUI browser handle.
 * @param {string} button Either 'left', 'middle' or 'right'.
 */
export function sendDuiMouseUp(duiObject: number, button: string): void {
	const sendDuiMouseUp_result = Citizen.invokeNative<void>('0X1D735B93', duiObject, button);
	return sendDuiMouseUp_result;
}