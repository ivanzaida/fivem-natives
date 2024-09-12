/**
 * CFX:CREATE_DUI
 *
 * 0x23EAF899

 * Creates a DUI browser. This can be used to draw on a runtime texture using CREATE\_RUNTIME\_TEXTURE\_FROM\_DUI\_HANDLE.
 * 
 * ------------------------------------------------------------------
 * @param {string} url The initial URL to load in the browser.
 * @param {number} width The width of the backing surface.
 * @param {number} height The height of the backing surface.
 * @returns {number}  A DUI object.
 */
export function createDui(url: string, width: number, height: number): number {
	const createDui_result = Citizen.invokeNative<number>('0x23EAF899', url, width, height);
	return createDui_result;
}