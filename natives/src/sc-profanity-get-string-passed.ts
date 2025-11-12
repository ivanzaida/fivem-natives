/**
 * SOCIALCLUB:SC_PROFANITY_GET_STRING_PASSED
 *
 * 0x7A6F7DFA98599242

 * 
 * Check IS_VALID(token) AND NOT IS_PENDING(token) before calling this to find whether is passed or fail
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} token
 * @returns {boolean}  
 */
export function scProfanityGetStringPassed(token: number): boolean {
	const scProfanityGetStringPassed_result = Citizen.invokeNative<boolean>('0x7A6F7DFA98599242', token);
	return scProfanityGetStringPassed_result;
}