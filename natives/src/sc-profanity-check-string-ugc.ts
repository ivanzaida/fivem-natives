import { IntRef } from '@ivanzaida/structures'

/**
 * SOCIALCLUB:SC_PROFANITY_CHECK_STRING_UGC
 *
 * 0xE2E0A9E99F465D83

 * 
 * ------------------------------------------------------------------
 * @param {string} textString
 * @param {IntRef} outToken [Ref]
 * @returns {boolean}  
 */
export function scProfanityCheckStringUgc(textString: string, outToken: IntRef /* ptr */): boolean {
	const scProfanityCheckStringUgc_result = Citizen.invokeNative<boolean>('0xE2E0A9E99F465D83', textString, outToken.dataView);
	return scProfanityCheckStringUgc_result;
}