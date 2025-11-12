import { IntRef } from '@ivanzaida/structures'

/**
 * MISC:STRING_TO_INT
 *
 * 0xA2ADD4A27CA857C2

 * 
 * Returns false if it's a null or empty string or if the string is too long. outInteger will be set to -999 in that case.
 * 
 * If all checks have passed successfully, the return value will be set to whatever strtol(string, 0i64, 10); returns.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {string} stringToConvert
 * @param {IntRef} outInteger [Ref]
 * @returns {boolean}  
 */
export function stringToInt(stringToConvert: string, outInteger: IntRef /* ptr */): boolean {
	const stringToInt_result = Citizen.invokeNative<boolean>('0xA2ADD4A27CA857C2', stringToConvert, outInteger.dataView);
	return stringToInt_result;
}