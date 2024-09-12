/**
 * CFX:SEND_DUI_MOUSE_DOWN
 *
 * 0x5D01F191

 * Injects a 'mouse down' event for a DUI object. Coordinates are expected to be set using SEND\_DUI\_MOUSE\_MOVE.
 * 
 * ------------------------------------------------------------------
 * @param {number} duiObject The DUI browser handle.
 * @param {string} button Either 'left', 'middle' or 'right'.
 */
export function sendDuiMouseDown(duiObject: number, button: string): void {
	const sendDuiMouseDown_result = Citizen.invokeNative<void>('0x5D01F191', duiObject, button);
	return sendDuiMouseDown_result;
}