/**
 * CFX:GET_NUM_PLAYER_TOKENS
 *
 * 0x619E4A3D

 * 
 * ------------------------------------------------------------------
 * @param {string} playerSrc
 * @returns {number}  
 */
export function getNumPlayerTokens(playerSrc: string): number {
	const getNumPlayerTokens_result = Citizen.invokeNative<number>('0x619E4A3D', playerSrc);
	return getNumPlayerTokens_result;
}