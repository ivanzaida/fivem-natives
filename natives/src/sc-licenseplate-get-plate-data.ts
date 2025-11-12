/**
 * SOCIALCLUB:SC_LICENSEPLATE_GET_PLATE_DATA
 *
 * 0xA71470E61CE061AE

 * 
 * Use SC_LICENSEPLATE_GET_CHECK_IS_PENDING() and wait for the request to finish.  Once
 * it's finished, use SC_LICENSEPLATE_GET_COUNT() to get the count of license plates retrieved,
 * then iterate using an index to get individual license plates.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} token
 * @param {number} index
 * @returns {string}  
 */
export function scLicenseplateGetPlateData(token: number, index: number): string {
	const scLicenseplateGetPlateData_result = Citizen.invokeNative<string>('0xA71470E61CE061AE', token, index);
	return scLicenseplateGetPlateData_result;
}