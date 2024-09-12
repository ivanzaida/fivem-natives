/**
 * SOCIALCLUB:SC_PROFANITY_GET_CHECK_IS_PENDING
 *
 * 0x11A87C58414E6C46

 * 
 * ------------------------------------------------------------------
 * @param {number} token
 * @returns {boolean}  
 */
export function scProfanityGetCheckIsPending(token: number): boolean {
	const scProfanityGetCheckIsPending_result = Citizen.invokeNative<boolean>('0x11A87C58414E6C46', token);
	return scProfanityGetCheckIsPending_result;
}