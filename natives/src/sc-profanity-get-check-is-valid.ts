/**
 * SOCIALCLUB:SC_PROFANITY_GET_CHECK_IS_VALID
 *
 * 0x3D1C2138A70E7348

 * 
 * ------------------------------------------------------------------
 * @param {number} token
 * @returns {boolean}  
 */
export function scProfanityGetCheckIsValid(token: number): boolean {
	const scProfanityGetCheckIsValid_result = Citizen.invokeNative<boolean>('0x3D1C2138A70E7348', token);
	return scProfanityGetCheckIsValid_result;
}