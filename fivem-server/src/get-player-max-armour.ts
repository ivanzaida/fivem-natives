/**
 * CFX:GET_PLAYER_MAX_ARMOUR
 *
 * 0x2A50657

 * 
 * ------------------------------------------------------------------
 * @param {string} playerSrc The player handle
 * @returns {number}  
 */
export function getPlayerMaxArmour(playerSrc: string): number {
	const getPlayerMaxArmour_result = Citizen.invokeNative<number>('0x2A50657', playerSrc);
	return getPlayerMaxArmour_result;
}