/**
 * CFX:SEND_DUI_MOUSE_WHEEL
 *
 * 0x2D62133A

 * Injects a 'mouse wheel' event for a DUI object.
 * 
 * ------------------------------------------------------------------
 * @param {number} duiObject The DUI browser handle.
 * @param {number} deltaY The wheel Y delta.
 * @param {number} deltaX The wheel X delta.
 */
export function sendDuiMouseWheel(duiObject: number, deltaY: number, deltaX: number): void {
	const sendDuiMouseWheel_result = Citizen.invokeNative<void>('0x2D62133A', duiObject, deltaY, deltaX);
	return sendDuiMouseWheel_result;
}