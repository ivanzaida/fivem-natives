/**
 * CFX:GET_EXTERNAL_KVP_STRING
 *
 * 0x9080363A

 * A getter for [SET_RESOURCE_KVP](#_0x21C7A35B), but for a specified resource.
 * 
 * ------------------------------------------------------------------
 * @param {string} resource The resource to fetch from.
 * @param {string} key The key to fetch
 * @returns {string}  A string that contains the value stored in the Kvp or nil/null if none.
 */
export function getExternalKvpString(resource: string, key: string): string {
	const getExternalKvpString_result = Citizen.invokeNative<string>('0x9080363A', resource, key);
	return getExternalKvpString_result;
}