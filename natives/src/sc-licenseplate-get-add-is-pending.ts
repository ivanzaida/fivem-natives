/**
 * SOCIALCLUB:SC_LICENSEPLATE_GET_ADD_IS_PENDING
 *
 * 0xF504C9571E86CF76

 * 
 * ------------------------------------------------------------------
 * @param {number} token
 * @returns {boolean}  
 */
export function scLicenseplateGetAddIsPending(token: number): boolean {
	const scLicenseplateGetAddIsPending_result = Citizen.invokeNative<boolean>('0xF504C9571E86CF76', token);
	return scLicenseplateGetAddIsPending_result;
}