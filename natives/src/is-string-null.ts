/**
 * MISC:IS_STRING_NULL
 *
 * 0xFF692AB7350A74D7

 * 
 * ------------------------------------------------------------------
 * @param {string} stringToTest
 * @returns {boolean}  
 */
export function isStringNull(stringToTest: string): boolean {
	const isStringNull_result = Citizen.invokeNative<boolean>('0xFF692AB7350A74D7', stringToTest);
	return isStringNull_result;
}