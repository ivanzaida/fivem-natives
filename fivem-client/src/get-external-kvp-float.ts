/**
 * CFX:GET_EXTERNAL_KVP_FLOAT
 *
 * 0x3CC98B25

 * A getter for [SET_RESOURCE_KVP_FLOAT](#_0x9ADD2938), but for a specified resource.
 * 
 * ------------------------------------------------------------------
 * @param {string} resource The resource to fetch from.
 * @param {string} key The key to fetch
 * @returns {number}  A float that contains the value stored in the Kvp or nil/null if none.
 */
export function getExternalKvpFloat(resource: string, key: string): number {
	const getExternalKvpFloat_result = Citizen.invokeNative<number>('0x3CC98B25', resource, key);
	return getExternalKvpFloat_result;
}