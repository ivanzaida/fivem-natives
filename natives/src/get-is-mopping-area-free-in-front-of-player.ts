import { PlayerIndex } from '@ivanzaida/structures'

/**
 * PLAYER:GET_IS_MOPPING_AREA_FREE_IN_FRONT_OF_PLAYER
 *
 * 0x93559B7C58C7660C

 * 
 * 2 occurrences in agency_heist3a. p1 was 0.7f then 0.4f.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PlayerIndex} player
 * @param {number} radius
 * @returns {boolean}  
 */
export function getIsMoppingAreaFreeInFrontOfPlayer(player: PlayerIndex, radius: number): boolean {
	const getIsMoppingAreaFreeInFrontOfPlayer_result = Citizen.invokeNative<boolean>('0x93559B7C58C7660C', player, radius);
	return getIsMoppingAreaFreeInFrontOfPlayer_result;
}