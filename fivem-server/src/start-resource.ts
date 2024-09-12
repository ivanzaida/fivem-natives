/**
 * CFX:START_RESOURCE
 *
 * 0x29B440DC

 * 
 * ------------------------------------------------------------------
 * @param {string} resourceName
 * @returns {boolean}  
 */
export function startResource(resourceName: string): boolean {
	const startResource_result = Citizen.invokeNative<boolean>('0x29B440DC', resourceName);
	return startResource_result;
}