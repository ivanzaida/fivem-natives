/**
 * HUD:GET_LENGTH_OF_STRING_WITH_THIS_TEXT_LABEL
 *
 * 0x7BA6D9664C39BE6D

 * 
 * Returns the string length of the string from the gxt string .
 * 
 * 
 * ------------------------------------------------------------------
 * @param {string} textLabel
 * @returns {number}  
 */
export function getLengthOfStringWithThisTextLabel(textLabel: string): number {
	const getLengthOfStringWithThisTextLabel_result = Citizen.invokeNative<number>('0x7BA6D9664C39BE6D', textLabel);
	return getLengthOfStringWithThisTextLabel_result;
}