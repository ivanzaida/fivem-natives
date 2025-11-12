/**
 * NETWORK:NETWORK_PLAYER_IS_BADSPORT
 *
 * 0x3369879DB5987727

 * 
 * Returns TRUE if the local player has been flagged as a bad sport.
 * 
 * 
 * ------------------------------------------------------------------
 * @returns {boolean}  
 */
export function networkPlayerIsBadsport(): boolean {
	const networkPlayerIsBadsport_result = Citizen.invokeNative<boolean>('0x3369879DB5987727', );
	return networkPlayerIsBadsport_result;
}