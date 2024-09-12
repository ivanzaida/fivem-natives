/**
 * CFX:GET_PLAYER_LAST_MSG
 *
 * 0X427E8E6A

 * 
 * ------------------------------------------------------------------
 * @param {string} playerSrc
 * @returns {number}  
 */
export function getPlayerLastMsg(playerSrc: string): number {
	const getPlayerLastMsg_result = Citizen.invokeNative<number>('0X427E8E6A', playerSrc);
	return getPlayerLastMsg_result;
}