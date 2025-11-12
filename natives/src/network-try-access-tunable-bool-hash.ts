/**
 * NETWORK:NETWORK_TRY_ACCESS_TUNABLE_BOOL_HASH
 *
 * 0x0752721B56D5DBA3

 * 
 * Returns defaultValue if the tunable doesn't exist.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} contextHash
 * @param {number} tunableHash
 * @param {boolean} defaultValue
 * @returns {boolean}  
 */
export function networkTryAccessTunableBoolHash(contextHash: number, tunableHash: number, defaultValue: boolean): boolean {
	const networkTryAccessTunableBoolHash_result = Citizen.invokeNative<boolean>('0x0752721B56D5DBA3', contextHash, tunableHash, defaultValue);
	return networkTryAccessTunableBoolHash_result;
}