/**
 * NETWORK:NETWORK_DOES_TUNABLE_EXIST_HASH
 *
 * 0xAFEA31CC8C88FC36

 * 
 * ------------------------------------------------------------------
 * @param {number} contextHash
 * @param {number} tunableHash
 * @returns {boolean}  
 */
export function networkDoesTunableExistHash(contextHash: number, tunableHash: number): boolean {
	const networkDoesTunableExistHash_result = Citizen.invokeNative<boolean>('0xAFEA31CC8C88FC36', contextHash, tunableHash);
	return networkDoesTunableExistHash_result;
}