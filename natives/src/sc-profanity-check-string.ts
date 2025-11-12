import { IntRef } from '@ivanzaida/structures'

/**
 * SOCIALCLUB:SC_PROFANITY_CHECK_STRING
 *
 * 0x9586B50628529A63

 * 
 * Starts a task to check an entered string for profanity on the ROS/Social Club services.
 * 
 * See also: 1753344C770358AE, 82E4A58BABC15AE7.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {string} textString
 * @param {IntRef} outToken [Ref]
 * @returns {boolean}  
 */
export function scProfanityCheckString(textString: string, outToken: IntRef /* ptr */): boolean {
	const scProfanityCheckString_result = Citizen.invokeNative<boolean>('0x9586B50628529A63', textString, outToken.dataView);
	return scProfanityCheckString_result;
}