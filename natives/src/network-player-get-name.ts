import { PlayerIndex } from '@ivanzaida/structures'

/**
 * NETWORK:NETWORK_PLAYER_GET_NAME
 *
 * 0x4B41F70EA5AA79D4

 * 
 * Returns the name of a given player. Returns "Invalid" if rlGamerInfo of the given player cannot be retrieved or the player doesn't exist.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PlayerIndex} player
 * @returns {string}  
 */
export function networkPlayerGetName(player: PlayerIndex): string {
	const networkPlayerGetName_result = Citizen.invokeNative<string>('0x4B41F70EA5AA79D4', player);
	return networkPlayerGetName_result;
}