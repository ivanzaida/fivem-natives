/**
 * CFX:GET_PLAYER_MAX_HEALTH
 *
 * 0x8154E470

 * 
 * ------------------------------------------------------------------
 * @param {string} playerSrc The player handle
 * @returns {number}  
 */
export function getPlayerMaxHealth(playerSrc: string): number {
	const getPlayerMaxHealth_result = Citizen.invokeNative<number>('0x8154E470', playerSrc);
	return getPlayerMaxHealth_result;
}