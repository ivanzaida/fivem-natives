import { PlayerIndex } from '@ivanzaida/structures'

/**
 * PLAYER:GET_PLAYER_TEAM
 *
 * 0x1864096A95E36EBA

 * 
 * Gets the player's team.
 * Does nothing in singleplayer.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PlayerIndex} player
 * @returns {number}  
 */
export function getPlayerTeam(player: PlayerIndex): number {
	const getPlayerTeam_result = Citizen.invokeNative<number>('0x1864096A95E36EBA', player);
	return getPlayerTeam_result;
}