/**
 * CFX:GET_NUM_PLAYER_IDENTIFIERS
 *
 * 0xFF7F66AB

 * 
 * ------------------------------------------------------------------
 * @param {string} playerSrc
 * @returns {number}  
 */
export function getNumPlayerIdentifiers(playerSrc: string): number {
	const getNumPlayerIdentifiers_result = Citizen.invokeNative<number>('0xFF7F66AB', playerSrc);
	return getNumPlayerIdentifiers_result;
}