/**
 * CFX:GET_EXTERNAL_KVP_INT
 *
 * 0x12B8D689

 * A getter for [SET_RESOURCE_KVP_INT](#_0x6A2B1E8), but for a specified resource.
 * 
 * ------------------------------------------------------------------
 * @param {string} resource The resource to fetch from.
 * @param {string} key The key to fetch
 * @returns {number}  A int that contains the value stored in the Kvp or nil/null if none.
 */
export function getExternalKvpInt(resource: string, key: string): number {
	const getExternalKvpInt_result = Citizen.invokeNative<number>('0x12B8D689', resource, key);
	return getExternalKvpInt_result;
}