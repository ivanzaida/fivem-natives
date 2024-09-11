import { PlayerIndex } from '@ivanzaida/structures'

/**
 * PLAYER:GET_PLAYER_NAME
 *
 * 0xBD6CA019F46AB947

 * 
 * ------------------------------------------------------------------
 * @param {PlayerIndex} player
 * @returns {string}  
 */
export function getPlayerName(player: PlayerIndex): string {
	const getPlayerName_result = Citizen.invokeNative<string>('0xBD6CA019F46AB947', player);
	return getPlayerName_result;
}