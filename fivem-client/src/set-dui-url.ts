/**
 * CFX:SET_DUI_URL
 *
 * 0xF761D9F3

 * Navigates the specified DUI browser to a different URL.
 * 
 * ------------------------------------------------------------------
 * @param {number} duiObject The DUI browser handle.
 * @param {string} url The new URL.
 */
export function setDuiUrl(duiObject: number, url: string): void {
	const setDuiUrl_result = Citizen.invokeNative<void>('0xF761D9F3', duiObject, url);
	return setDuiUrl_result;
}