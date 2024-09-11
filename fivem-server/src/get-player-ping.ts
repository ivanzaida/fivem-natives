/**
 * CFX:GET_PLAYER_PING
 *
 * 0XFF1290D4

 * 
 * ------------------------------------------------------------------
 * @param {string} playerSrc
 * @returns {number}  
 */
export function getPlayerPing(playerSrc: string): number {
	const getPlayerPing_result = Citizen.invokeNative<number>('0XFF1290D4', playerSrc);
	return getPlayerPing_result;
}