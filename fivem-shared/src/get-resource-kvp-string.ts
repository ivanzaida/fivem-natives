/**
 * CFX:GET_RESOURCE_KVP_STRING
 *
 * 0X5240DA5A

 * A getter for [SET_RESOURCE_KVP](#_0x21C7A35B).
 * 
 * ------------------------------------------------------------------
 * @param {string} key The key to fetch
 * @returns {string}  The string value stored under the specified key, or nil/null if not found.
 */
export function getResourceKvpString(key: string): string {
	const getResourceKvpString_result = Citizen.invokeNative<string>('0X5240DA5A', key);
	return getResourceKvpString_result;
}