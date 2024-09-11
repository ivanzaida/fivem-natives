/**
 * CFX:START_FIND_EXTERNAL_KVP
 *
 * 0X8F2EECC3

 * Equivalent of [START_FIND_KVP](#_0xDD379006), but for another resource than the current one.
 * 
 * ------------------------------------------------------------------
 * @param {string} resourceName The resource to try finding the key/values for
 * @param {string} prefix A prefix match
 * @returns {number}  A KVP find handle to use with [FIND_KVP](#_0xBD7BEBC5) and close with [END_FIND_KVP](#_0xB3210203)
 */
export function startFindExternalKvp(resourceName: string, prefix: string): number {
	const startFindExternalKvp_result = Citizen.invokeNative<number>('0X8F2EECC3', resourceName, prefix);
	return startFindExternalKvp_result;
}