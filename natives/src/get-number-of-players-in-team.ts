/**
 * PLAYER:GET_NUMBER_OF_PLAYERS_IN_TEAM
 *
 * 0x18476AA515A4460B

 * 
 * ------------------------------------------------------------------
 * @param {number} team
 * @returns {number}  
 */
export function getNumberOfPlayersInTeam(team: number): number {
	const getNumberOfPlayersInTeam_result = Citizen.invokeNative<number>('0x18476AA515A4460B', team);
	return getNumberOfPlayersInTeam_result;
}