import { PlayerIndex } from '@ivanzaida/structures'

/**
 * CFX:GET_PLAYER_TEAM
 *
 * 0x9873E404

 * Gets the player's team.
 * Does nothing in singleplayer.
 * 
 * ------------------------------------------------------------------
 * @param {PlayerIndex} player
 * @returns {number}  
 */
export function getPlayerTeam(player: PlayerIndex): number {
	const getPlayerTeam_result = Citizen.invokeNative<number>('0x9873E404', player);
	return getPlayerTeam_result;
}