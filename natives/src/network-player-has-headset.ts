import { PlayerIndex } from '@ivanzaida/structures'

/**
 * NETWORK:NETWORK_PLAYER_HAS_HEADSET
 *
 * 0xF060DE6D44C11C50

 * 
 * ------------------------------------------------------------------
 * @param {PlayerIndex} netPlayerID
 * @returns {boolean}  
 */
export function networkPlayerHasHeadset(netPlayerID: PlayerIndex): boolean {
	const networkPlayerHasHeadset_result = Citizen.invokeNative<boolean>('0xF060DE6D44C11C50', netPlayerID);
	return networkPlayerHasHeadset_result;
}