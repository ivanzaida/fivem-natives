/**
 * CFX:GET_PLAYER_TEAM
 *
 * 0x9873E404

 * 
 * Gets the player's team.
 * Does nothing in singleplayer.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {string} playerSrc The player handle
 * @returns {number}  
 */
export function getPlayerTeam(playerSrc: string): number {
	const getPlayerTeam_result = Citizen.invokeNative<number>('0x9873E404', playerSrc);
	return getPlayerTeam_result;
}