/**
 * CFX:GET_DUI_HANDLE
 *
 * 0X1655D41D

 * Returns the NUI window handle for a specified DUI browser object.
 * 
 * ------------------------------------------------------------------
 * @param {number} duiObject The DUI browser handle.
 * @returns {string}  The NUI window handle, for use in e.g. CREATE\_RUNTIME\_TEXTURE\_FROM\_DUI\_HANDLE.
 */
export function getDuiHandle(duiObject: number): string {
	const getDuiHandle_result = Citizen.invokeNative<string>('0X1655D41D', duiObject);
	return getDuiHandle_result;
}