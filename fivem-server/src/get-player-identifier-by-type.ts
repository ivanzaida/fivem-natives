/**
 * CFX:GET_PLAYER_IDENTIFIER_BY_TYPE
 *
 * 0xA61C8FC6

 * Get an identifier from a player by the type of the identifier.Known [Identifiers](https://docs.fivem.net/docs/scripting-reference/runtimes/lua/functions/GetPlayerIdentifiers/#identifier-types)
 * 
 * ------------------------------------------------------------------
 * @param {string} playerSrc The player to get the identifier for
 * @param {string} identifierType The string to match in an identifier, this can be "license" for example.
 * @returns {string}  The identifier that matches the string provided
 */
export function getPlayerIdentifierByType(playerSrc: string, identifierType: string): string {
	const getPlayerIdentifierByType_result = Citizen.invokeNative<string>('0xA61C8FC6', playerSrc, identifierType);
	return getPlayerIdentifierByType_result;
}