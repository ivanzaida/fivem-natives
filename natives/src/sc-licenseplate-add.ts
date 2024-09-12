import { IntRef } from '@ivanzaida/structures'

/**
 * SOCIALCLUB:SC_LICENSEPLATE_ADD
 *
 * 0x54B88AF600DB0C95

 * 
 * ------------------------------------------------------------------
 * @param {string} textString
 * @param {string} plateData
 * @param {IntRef} outToken [Ref]
 * @returns {boolean}  
 */
export function scLicenseplateAdd(textString: string, plateData: string, outToken: IntRef /* ptr */): boolean {
	const scLicenseplateAdd_result = Citizen.invokeNative<boolean>('0x54B88AF600DB0C95', textString, plateData, outToken.dataView);
	return scLicenseplateAdd_result;
}