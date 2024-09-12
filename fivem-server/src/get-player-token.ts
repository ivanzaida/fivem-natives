/**
 * CFX:GET_PLAYER_TOKEN
 *
 * 0X54C06897

 * Gets a player's token. Tokens can be used to enhance banning logic, however are specific to a server.
 * 
 * ------------------------------------------------------------------
 * @param {string} playerSrc A player.
 * @param {number} index Index between 0 and GET_NUM_PLAYER_TOKENS.
 * @returns {string}  A token value.
 */
export function getPlayerToken(playerSrc: string, index: number): string {
	const getPlayerToken_result = Citizen.invokeNative<string>('0X54C06897', playerSrc, index);
	return getPlayerToken_result;
}