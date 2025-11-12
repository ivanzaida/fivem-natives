/**
 * SOCIALCLUB:SC_LICENSEPLATE_GET_PLATE
 *
 * 0x649D7167E25976C9

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
export function scLicenseplateGetPlate(token: number, index: number): string {
	const scLicenseplateGetPlate_result = Citizen.invokeNative<string>('0x649D7167E25976C9', token, index);
	return scLicenseplateGetPlate_result;
}