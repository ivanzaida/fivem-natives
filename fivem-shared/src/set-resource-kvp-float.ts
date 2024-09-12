/**
 * CFX:SET_RESOURCE_KVP_FLOAT
 *
 * 0X9ADD2938

 * A setter for [GET_RESOURCE_KVP_FLOAT](#_0x35BDCEEA).
 * 
 * ------------------------------------------------------------------
 * @param {string} key The key to set
 * @param {number} value The value to write
 */
export function setResourceKvpFloat(key: string, value: number): void {
	const setResourceKvpFloat_result = Citizen.invokeNative<void>('0X9ADD2938', key, value);
	return setResourceKvpFloat_result;
}