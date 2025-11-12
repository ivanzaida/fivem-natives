/**
 * NETWORK:NETWORK_PLAYER_IS_CHEATER
 *
 * 0xB10D024D4A098884

 * 
 * Returns TRUE if the local player has been flagged as a cheater.
 * 
 * 
 * ------------------------------------------------------------------
 * @returns {boolean}  
 */
export function networkPlayerIsCheater(): boolean {
	const networkPlayerIsCheater_result = Citizen.invokeNative<boolean>('0xB10D024D4A098884', );
	return networkPlayerIsCheater_result;
}