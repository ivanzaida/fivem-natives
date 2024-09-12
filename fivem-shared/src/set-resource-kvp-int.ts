/**
 * CFX:SET_RESOURCE_KVP_INT
 *
 * 0x6A2B1E8

 * A setter for [GET_RESOURCE_KVP_INT](#_0x557B586A).
 * 
 * ------------------------------------------------------------------
 * @param {string} key The key to set
 * @param {number} value The value to write
 */
export function setResourceKvpInt(key: string, value: number): void {
	const setResourceKvpInt_result = Citizen.invokeNative<void>('0x6A2B1E8', key, value);
	return setResourceKvpInt_result;
}