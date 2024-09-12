/**
 * MISC:IS_STRING_NULL_OR_EMPTY
 *
 * 0xD6F9DEE4765092A9

 * 
 * ------------------------------------------------------------------
 * @param {string} stringToTest
 * @returns {boolean}  
 */
export function isStringNullOrEmpty(stringToTest: string): boolean {
	const isStringNullOrEmpty_result = Citizen.invokeNative<boolean>('0xD6F9DEE4765092A9', stringToTest);
	return isStringNullOrEmpty_result;
}