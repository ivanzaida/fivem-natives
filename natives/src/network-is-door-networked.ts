/**
 * NETWORK:NETWORK_IS_DOOR_NETWORKED
 *
 * 0xBC04D336219C5196

 * 
 * ------------------------------------------------------------------
 * @param {number} doorEnumHash
 * @returns {boolean}  
 */
export function networkIsDoorNetworked(doorEnumHash: number): boolean {
	const networkIsDoorNetworked_result = Citizen.invokeNative<boolean>('0xBC04D336219C5196', doorEnumHash);
	return networkIsDoorNetworked_result;
}