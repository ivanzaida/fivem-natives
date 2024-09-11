/**
 * CFX:GET_RESOURCE_STATE
 *
 * 0X4039B485

 * Returns the current state of the specified resource.
 * 
 * ------------------------------------------------------------------
 * @param {string} resourceName The name of the resource.
 * @returns {string}  The resource state. One of `"missing", "started", "starting", "stopped", "stopping", "uninitialized" or "unknown"`.
 */
export function getResourceState(resourceName: string): string {
	const getResourceState_result = Citizen.invokeNative<string>('0X4039B485', resourceName);
	return getResourceState_result;
}