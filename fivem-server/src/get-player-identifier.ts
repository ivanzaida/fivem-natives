/**
 * CFX:GET_PLAYER_IDENTIFIER
 *
 * 0x7302DBCF

 * 
 * ------------------------------------------------------------------
 * @param {string} playerSrc
 * @param {number} identifier
 * @returns {string}  
 */
export function getPlayerIdentifier(playerSrc: string, identifier: number): string {
	const getPlayerIdentifier_result = Citizen.invokeNative<string>('0x7302DBCF', playerSrc, identifier);
	return getPlayerIdentifier_result;
}