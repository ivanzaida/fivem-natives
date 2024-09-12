import { PlayerIndex } from '@ivanzaida/structures'

/**
 * NETWORK:NETWORK_IS_PLAYER_CONNECTED
 *
 * 0x89BE185F885B6CD6

 * 
 * ------------------------------------------------------------------
 * @param {PlayerIndex} plr
 * @returns {boolean}  
 */
export function networkIsPlayerConnected(plr: PlayerIndex): boolean {
	const networkIsPlayerConnected_result = Citizen.invokeNative<boolean>('0x89BE185F885B6CD6', plr);
	return networkIsPlayerConnected_result;
}