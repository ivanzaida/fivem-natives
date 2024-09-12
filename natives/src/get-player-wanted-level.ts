import { PlayerIndex } from '@ivanzaida/structures'

/**
 * PLAYER:GET_PLAYER_WANTED_LEVEL
 *
 * 0xE7B45027762DEFE7

 * 
 * ------------------------------------------------------------------
 * @param {PlayerIndex} player
 * @returns {number}  
 */
export function getPlayerWantedLevel(player: PlayerIndex): number {
	const getPlayerWantedLevel_result = Citizen.invokeNative<number>('0xE7B45027762DEFE7', player);
	return getPlayerWantedLevel_result;
}