/**
 * CFX:START_RESOURCE
 *
 * 0X29B440DC

 * 
 * ------------------------------------------------------------------
 * @param {string} resourceName
 * @returns {boolean}  
 */
export function startResource(resourceName: string): boolean {
	const startResource_result = Citizen.invokeNative<boolean>('0X29B440DC', resourceName);
	return startResource_result;
}