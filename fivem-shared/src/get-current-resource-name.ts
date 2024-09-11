/**
 * CFX:GET_CURRENT_RESOURCE_NAME
 *
 * 0XE5E9EBBB

 * Returns the name of the currently executing resource.
 * 
 * ------------------------------------------------------------------
 * @returns {string}  The name of the resource.
 */
export function getCurrentResourceName(): string {
	const getCurrentResourceName_result = Citizen.invokeNative<string>('0XE5E9EBBB', );
	return getCurrentResourceName_result;
}