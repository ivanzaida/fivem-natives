/**
 * CFX:SET_RESOURCE_KVP
 *
 * 0X21C7A35B

 * A setter for [GET_RESOURCE_KVP_STRING](#_0x5240DA5A).
 * 
 * ------------------------------------------------------------------
 * @param {string} key The key to set
 * @param {string} value The value to write
 */
export function setResourceKvp(key: string, value: string): void {
	const setResourceKvp_result = Citizen.invokeNative<void>('0X21C7A35B', key, value);
	return setResourceKvp_result;
}