/**
 * NETWORK:NETWORK_PLAYER_GET_CHEATER_REASON
 *
 * 0x36D707C40C1DCEB3

 * 
 * Returns code for the reason the player has been deemed a cheater
 * 
 * 
 * ------------------------------------------------------------------
 * @returns {number}  
 */
export function networkPlayerGetCheaterReason(): number {
	const networkPlayerGetCheaterReason_result = Citizen.invokeNative<number>('0x36D707C40C1DCEB3', );
	return networkPlayerGetCheaterReason_result;
}