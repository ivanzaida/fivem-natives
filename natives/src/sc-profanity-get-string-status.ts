import { EEProfanityCheckStatus } from '@ivanzaida/structures'

/**
 * SOCIALCLUB:SC_PROFANITY_GET_STRING_STATUS
 *
 * 0x0AE6BE5940D835FA

 * 
 * Use SC_PROFANITY_GET_CHECK_IS_PENDING() and wait for the request to finish.  Once
 * it's finished, use SC_PROFANITY_GET_STRING_STATUS() to get the status of the result.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} token
 * @returns {EEProfanityCheckStatus}  
 */
export function scProfanityGetStringStatus(token: number): EEProfanityCheckStatus {
	const scProfanityGetStringStatus_result = Citizen.invokeNative<EEProfanityCheckStatus>('0x0AE6BE5940D835FA', token);
	return scProfanityGetStringStatus_result;
}