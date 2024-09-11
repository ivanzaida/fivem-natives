/**
 * CFX:IS_DUI_AVAILABLE
 *
 * 0X7AAC3B4C

 * Returns whether or not a browser is created for a specified DUI browser object.
 * 
 * ------------------------------------------------------------------
 * @param {number} duiObject The DUI browser handle.
 * @returns {boolean}  A boolean indicating TRUE if the browser is created.
 */
export function isDuiAvailable(duiObject: number): boolean {
	const isDuiAvailable_result = Citizen.invokeNative<boolean>('0X7AAC3B4C', duiObject);
	return isDuiAvailable_result;
}