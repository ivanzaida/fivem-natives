/**
 * SOCIALCLUB:SC_LICENSEPLATE_GET_CHECK_IS_PENDING
 *
 * 0xF7A6291F5AE831D1

 * 
 * ------------------------------------------------------------------
 * @param {number} token
 * @returns {boolean}  
 */
export function scLicenseplateGetCheckIsPending(token: number): boolean {
	const scLicenseplateGetCheckIsPending_result = Citizen.invokeNative<boolean>('0xF7A6291F5AE831D1', token);
	return scLicenseplateGetCheckIsPending_result;
}