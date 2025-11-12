/**
 * HUD:GET_FIRST_N_CHARACTERS_OF_LITERAL_STRING
 *
 * 0x570D616FD7B4715D

 * 
 * If the label doesn't exist in either of these two blocks then the command returns FALSE.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {string} literalString
 * @param {number} numberOfCharacters
 * @returns {string}  
 */
export function getFirstNCharactersOfLiteralString(literalString: string, numberOfCharacters: number): string {
	const getFirstNCharactersOfLiteralString_result = Citizen.invokeNative<string>('0x570D616FD7B4715D', literalString, numberOfCharacters);
	return getFirstNCharactersOfLiteralString_result;
}