/**
 * HUD:GET_LENGTH_OF_LITERAL_STRING_IN_BYTES
 *
 * 0x31A0D8A679F7D5A7

 * 
 * ------------------------------------------------------------------
 * @param {string} literalString
 * @returns {number}  
 */
export function getLengthOfLiteralStringInBytes(literalString: string): number {
	const getLengthOfLiteralStringInBytes_result = Citizen.invokeNative<number>('0x31A0D8A679F7D5A7', literalString);
	return getLengthOfLiteralStringInBytes_result;
}