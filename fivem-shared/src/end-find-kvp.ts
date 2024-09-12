/**
 * CFX:END_FIND_KVP
 *
 * 0xB3210203

 * 
 * ------------------------------------------------------------------
 * @param {number} handle The KVP find handle returned from [START_FIND_KVP](_0xDD379006)
 */
export function endFindKvp(handle: number): void {
	const endFindKvp_result = Citizen.invokeNative<void>('0xB3210203', handle);
	return endFindKvp_result;
}