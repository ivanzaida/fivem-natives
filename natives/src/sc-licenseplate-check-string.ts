import { IntRef } from '@ivanzaida/structures'

/**
 * SOCIALCLUB:SC_LICENSEPLATE_CHECK_STRING
 *
 * 0x4FB031EC3F28B77C

 * 
 * ------------------------------------------------------------------
 * @param {string} textString
 * @param {IntRef} outToken [Ref]
 * @returns {boolean}  
 */
export function scLicenseplateCheckString(textString: string, outToken: IntRef /* ptr */): boolean {
	const scLicenseplateCheckString_result = Citizen.invokeNative<boolean>('0x4FB031EC3F28B77C', textString, outToken.dataView);
	return scLicenseplateCheckString_result;
}