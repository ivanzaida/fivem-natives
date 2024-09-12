import { IntRef } from '@ivanzaida/structures'

/**
 * SOCIALCLUB:SC_LICENSEPLATE_ISVALID
 *
 * 0x271FD9228830C5F4

 * 
 * ------------------------------------------------------------------
 * @param {string} textString
 * @param {IntRef} outToken [Ref]
 * @returns {boolean}  
 */
export function scLicenseplateIsvalid(textString: string, outToken: IntRef /* ptr */): boolean {
	const scLicenseplateIsvalid_result = Citizen.invokeNative<boolean>('0x271FD9228830C5F4', textString, outToken.dataView);
	return scLicenseplateIsvalid_result;
}