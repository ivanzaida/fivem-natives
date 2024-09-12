/**
 * CFX:GET_RESOURCE_KVP_INT
 *
 * 0X557B586A

 * A getter for [SET_RESOURCE_KVP_INT](#_0x6A2B1E8).
 * 
 * ------------------------------------------------------------------
 * @param {string} key The key to fetch
 * @returns {number}  The integer value stored under the specified key, or 0 if not found.
 */
export function getResourceKvpInt(key: string): number {
	const getResourceKvpInt_result = Citizen.invokeNative<number>('0X557B586A', key);
	return getResourceKvpInt_result;
}