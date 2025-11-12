/**
 * CFX:GET_PLAYER_IDENTIFIER
 *
 * 0x7302DBCF

 * To get the number of identifiers, use [GET_NUM_PLAYER_IDENTIFIERS](#_0xFF7F66AB)To get a specific type of identifier, use [GET_PLAYER_IDENTIFIER_BY_TYPE](#_0xA61C8FC6)
 * 
 * ------------------------------------------------------------------
 * @param {string} playerSrc
 * @param {number} identiferIndex
 * @returns {string}  Returns the identifier at the specific index, if out of bounds returns `null`
 */
export function getPlayerIdentifier(playerSrc: string, identiferIndex: number): string {
	const getPlayerIdentifier_result = Citizen.invokeNative<string>('0x7302DBCF', playerSrc, identiferIndex);
	return getPlayerIdentifier_result;
}