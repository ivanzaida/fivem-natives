/**
 * MISC:COMPARE_STRINGS
 *
 * 0xDCE96FB47C1D0314

 * Compares two strings up to a specified number of characters.
 * Parameters:
 * str1 - String to be compared.
 * str2 - String to be compared.
 * matchCase - Comparison will be case-sensitive.
 * maxLength - Maximum number of characters to compare. A value of -1 indicates an infinite length.
 * Returns:
 * A value indicating the relationship between the strings:
 * <0 - The first non-matching character in 'str1' is less than the one in 'str2'. (e.g. 'A' < 'B', so result = -1)
 * 0 - The contents of both strings are equal.
 * >0 - The first non-matching character in 'str1' is less than the one in 'str2'. (e.g. 'B' > 'A', so result = 1)
 * Examples:
 * MISC::COMPARE_STRINGS("STRING", "string", false, -1); // 0; equal
 * MISC::COMPARE_STRINGS("TESTING", "test", false, 4); // 0; equal
 * MISC::COMPARE_STRINGS("R2D2", "R2xx", false, 2); // 0; equal
 * MISC::COMPARE_STRINGS("foo", "bar", false, -1); // 4; 'f' > 'b'
 * MISC::COMPARE_STRINGS("A", "A", true, 1); // 0; equal
 * When comparing case-sensitive strings, lower-case characters are greater than upper-case characters:
 * MISC::COMPARE_STRINGS("A", "a", true, 1); // -1; 'A' < 'a'
 * MISC::COMPARE_STRINGS("a", "A", true, 1); // 1; 'a' > 'A'
 * 
 * ------------------------------------------------------------------
 * @param {string} string1
 * @param {string} string2
 * @param {boolean} caseSensitive
 * @param {number} numberOfCharactersToCompare
 * @returns {number}  
 */
export function compareStrings(string1: string, string2: string, caseSensitive: boolean = false, numberOfCharactersToCompare: number = 1): number {
	const compareStrings_result = Citizen.invokeNative<number>('0xDCE96FB47C1D0314', string1, string2, caseSensitive, numberOfCharactersToCompare);
	return compareStrings_result;
}