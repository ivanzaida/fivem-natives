/**
 * CFX:STOP_RESOURCE
 *
 * 0X21783161

 * 
 * ------------------------------------------------------------------
 * @param {string} resourceName
 * @returns {boolean}  
 */
export function stopResource(resourceName: string): boolean {
	const stopResource_result = Citizen.invokeNative<boolean>('0X21783161', resourceName);
	return stopResource_result;
}