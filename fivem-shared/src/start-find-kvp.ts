/**
 * CFX:START_FIND_KVP
 *
 * 0xDD379006

 * 
 * ------------------------------------------------------------------
 * @param {string} prefix A prefix match
 * @returns {number}  A KVP find handle to use with [FIND_KVP](#_0xBD7BEBC5) and close with [END_FIND_KVP](#_0xB3210203)
 */
export function startFindKvp(prefix: string): number {
	const startFindKvp_result = Citizen.invokeNative<number>('0xDD379006', prefix);
	return startFindKvp_result;
}