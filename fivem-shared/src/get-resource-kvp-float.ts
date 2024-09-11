/**
 * CFX:GET_RESOURCE_KVP_FLOAT
 *
 * 0X35BDCEEA

 * A getter for [SET_RESOURCE_KVP_FLOAT](#_0x9ADD2938).
 * 
 * ------------------------------------------------------------------
 * @param {string} key The key to fetch
 * @returns {number}  The floating-point value stored under the specified key, or 0.0 if not found.
 */
export function getResourceKvpFloat(key: string): number {
	const getResourceKvpFloat_result = Citizen.invokeNative<number>('0X35BDCEEA', key);
	return getResourceKvpFloat_result;
}