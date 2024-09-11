/**
 * CFX:GET_RESOURCE_PATH
 *
 * 0X61DCF017

 * Returns the physical on-disk path of the specified resource.
 * 
 * ------------------------------------------------------------------
 * @param {string} resourceName The name of the resource.
 * @returns {string}  The resource directory name, possibly without trailing slash.
 */
export function getResourcePath(resourceName: string): string {
	const getResourcePath_result = Citizen.invokeNative<string>('0X61DCF017', resourceName);
	return getResourcePath_result;
}