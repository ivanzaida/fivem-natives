/**
 * SOCIALCLUB:SC_LICENSEPLATE_GET_COUNT
 *
 * 0xD635755A3659101C

 * 
 * Use SC_LICENSEPLATE_GET_CHECK_IS_PENDING() and wait for the request to finish.  Once
 * it's finished, use SC_LICENSEPLATE_GET_COUNT() to get the count of license plates retrieved.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} token
 * @returns {number}  
 */
export function scLicenseplateGetCount(token: number): number {
	const scLicenseplateGetCount_result = Citizen.invokeNative<number>('0xD635755A3659101C', token);
	return scLicenseplateGetCount_result;
}