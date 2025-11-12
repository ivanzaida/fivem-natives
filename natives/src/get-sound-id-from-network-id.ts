/**
 * AUDIO:GET_SOUND_ID_FROM_NETWORK_ID
 *
 * 0x37964484C6C1561D

 * 
 * Convert from network sound ID to network ID
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} networkId
 * @returns {number}  
 */
export function getSoundIdFromNetworkId(networkId: number): number {
	const getSoundIdFromNetworkId_result = Citizen.invokeNative<number>('0x37964484C6C1561D', networkId);
	return getSoundIdFromNetworkId_result;
}