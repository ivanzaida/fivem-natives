import { PlayerIndex } from '@ivanzaida/structures'

/**
 * NETWORK:NETWORK_IS_CONNECTED_VIA_RELAY
 *
 * 0x6C15571532CF7F95

 * 
 * Returns whether we are connected to the specified player via a relay server connection. This should only be called on remote players.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PlayerIndex} player
 * @returns {boolean}  
 */
export function networkIsConnectedViaRelay(player: PlayerIndex): boolean {
	const networkIsConnectedViaRelay_result = Citizen.invokeNative<boolean>('0x6C15571532CF7F95', player);
	return networkIsConnectedViaRelay_result;
}