/**
 * CFX:GET_PLAYER_FROM_INDEX
 *
 * 0XC8A9CE08

 * 
 * ------------------------------------------------------------------
 * @param {number} index
 * @returns {string}  
 */
export function getPlayerFromIndex(index: number): string {
	const getPlayerFromIndex_result = Citizen.invokeNative<string>('0XC8A9CE08', index);
	return getPlayerFromIndex_result;
}