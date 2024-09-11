/**
 * CFX:FIND_KVP
 *
 * 0XBD7BEBC5

 * 
 * ------------------------------------------------------------------
 * @param {number} handle The KVP find handle returned from [START_FIND_KVP](_0xDD379006)
 * @returns {string}  None.
 */
export function findKvp(handle: number): string {
	const findKvp_result = Citizen.invokeNative<string>('0XBD7BEBC5', handle);
	return findKvp_result;
}