/**
 * NETWORK:NETWORK_GET_TOTAL_NUM_PLAYERS
 *
 * 0xC259E614564DAB8F

 * 
 * ------------------------------------------------------------------
 * @returns {number}  
 */
export function networkGetTotalNumPlayers(): number {
	const networkGetTotalNumPlayers_result = Citizen.invokeNative<number>('0xC259E614564DAB8F', );
	return networkGetTotalNumPlayers_result;
}