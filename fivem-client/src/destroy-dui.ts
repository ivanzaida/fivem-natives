/**
 * CFX:DESTROY_DUI
 *
 * 0xA085CB10

 * Destroys a DUI browser.
 * 
 * ------------------------------------------------------------------
 * @param {number} duiObject The DUI browser handle.
 */
export function destroyDui(duiObject: number): void {
	const destroyDui_result = Citizen.invokeNative<void>('0xA085CB10', duiObject);
	return destroyDui_result;
}