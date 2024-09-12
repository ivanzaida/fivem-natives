/**
 * CFX:SEND_DUI_MOUSE_MOVE
 *
 * 0XD9D7A0AA

 * Injects a 'mouse move' event for a DUI object. Coordinates are in browser space.
 * 
 * ------------------------------------------------------------------
 * @param {number} duiObject The DUI browser handle.
 * @param {number} x The mouse X position.
 * @param {number} y The mouse Y position.
 */
export function sendDuiMouseMove(duiObject: number, x: number, y: number): void {
	const sendDuiMouseMove_result = Citizen.invokeNative<void>('0XD9D7A0AA', duiObject, x, y);
	return sendDuiMouseMove_result;
}