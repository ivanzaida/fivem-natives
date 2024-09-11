/**
 * NETWORK:NETWORK_ACCESS_TUNABLE_BOOL_HASH
 *
 * 0xBFCA4F7F15FD06CC

 * 
 * ------------------------------------------------------------------
 * @param {number} contextHash
 * @param {number} tunableHash
 * @returns {boolean}  
 */
export function networkAccessTunableBoolHash(contextHash: number, tunableHash: number): boolean {
	const networkAccessTunableBoolHash_result = Citizen.invokeNative<boolean>('0xBFCA4F7F15FD06CC', contextHash, tunableHash);
	return networkAccessTunableBoolHash_result;
}