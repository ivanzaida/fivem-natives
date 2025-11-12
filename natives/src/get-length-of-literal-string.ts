/**
 * HUD:GET_LENGTH_OF_LITERAL_STRING
 *
 * 0x09112CCF7824FE38

 * 
 * Returns the length of the string passed (much like strlen).
 * 
 * 
 * ------------------------------------------------------------------
 * @param {string} literalString
 * @returns {number}  
 */
export function getLengthOfLiteralString(literalString: string): number {
	const getLengthOfLiteralString_result = Citizen.invokeNative<number>('0x09112CCF7824FE38', literalString);
	return getLengthOfLiteralString_result;
}