import { PlayerIndex } from '@ivanzaida/structures'

/**
 * CFX:GET_PLAYER_WANTED_LEVEL
 *
 * 0xBDCDD163

 * 
 * ------------------------------------------------------------------
 * @param {PlayerIndex} player
 * @returns {number}  
 */
export function getPlayerWantedLevel(player: PlayerIndex): number {
	const getPlayerWantedLevel_result = Citizen.invokeNative<number>('0xBDCDD163', player);
	return getPlayerWantedLevel_result;
}