import { PlayerIndex } from '@ivanzaida/structures'

/**
 * NETWORK:NETWORK_IS_PLAYER_TALKING
 *
 * 0x51DC6104DE62EE22

 * 
 * returns true if someone is screaming or talking in a microphone
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PlayerIndex} netPlayerID
 * @returns {boolean}  
 */
export function networkIsPlayerTalking(netPlayerID: PlayerIndex): boolean {
	const networkIsPlayerTalking_result = Citizen.invokeNative<boolean>('0x51DC6104DE62EE22', netPlayerID);
	return networkIsPlayerTalking_result;
}