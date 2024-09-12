/**
 * CFX:GET_PLAYER_WANTED_LEVEL
 *
 * 0xBDCDD163

 * 
 * ------------------------------------------------------------------
 * @param {string} playerSrc The target player
 * @returns {number}  
 */
export function getPlayerWantedLevel(playerSrc: string): number {
	const getPlayerWantedLevel_result = Citizen.invokeNative<number>('0xBDCDD163', playerSrc);
	return getPlayerWantedLevel_result;
}