/**
 * NETWORK:NETWORK_GET_RESPAWN_RESULT_FLAGS
 *
 * 0xD47DD48CBAF4A6B5

 * 
 * This command retrieves associated flags for a single spawn point, must be in the valid range as returned by the above command
 * Flags will be a combination of values from the enumeration RESPAWN_RESULT_FLAGS
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} result
 * @returns {number}  
 */
export function networkGetRespawnResultFlags(result: number): number {
	const networkGetRespawnResultFlags_result = Citizen.invokeNative<number>('0xD47DD48CBAF4A6B5', result);
	return networkGetRespawnResultFlags_result;
}