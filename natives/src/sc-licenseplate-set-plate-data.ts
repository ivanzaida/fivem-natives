/**
 * SOCIALCLUB:SC_LICENSEPLATE_SET_PLATE_DATA
 *
 * 0x3892A85343809530

 * 
 * ------------------------------------------------------------------
 * @param {string} oldPlateText
 * @param {string} newPlateText
 * @param {string} plateData
 * @returns {boolean}  
 */
export function scLicenseplateSetPlateData(oldPlateText: string, newPlateText: string, plateData: string): boolean {
	const scLicenseplateSetPlateData_result = Citizen.invokeNative<boolean>('0x3892A85343809530', oldPlateText, newPlateText, plateData);
	return scLicenseplateSetPlateData_result;
}