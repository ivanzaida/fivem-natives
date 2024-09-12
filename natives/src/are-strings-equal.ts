/**
 * MISC:ARE_STRINGS_EQUAL
 *
 * 0x1B79E937E91F40C3

 * 
 * ------------------------------------------------------------------
 * @param {string} string1
 * @param {string} string2
 * @returns {boolean}  
 */
export function areStringsEqual(string1: string, string2: string): boolean {
	const areStringsEqual_result = Citizen.invokeNative<boolean>('0x1B79E937E91F40C3', string1, string2);
	return areStringsEqual_result;
}