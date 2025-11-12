import { PlayerIndex } from '@ivanzaida/structures'

/**
 * PLAYER:GET_IS_PLAYER_DRIVING_ON_HIGHWAY
 *
 * 0x771C914E893FD9EB

 * 
 * Appears once in "re_dealgonewrong"
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PlayerIndex} player
 * @returns {boolean}  
 */
export function getIsPlayerDrivingOnHighway(player: PlayerIndex): boolean {
	const getIsPlayerDrivingOnHighway_result = Citizen.invokeNative<boolean>('0x771C914E893FD9EB', player);
	return getIsPlayerDrivingOnHighway_result;
}