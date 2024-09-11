/**
 * SOCIALCLUB:SC_LICENSEPLATE_GET_CHECK_IS_VALID
 *
 * 0x095CCC9C5DC3BBF2

 * 
 * ------------------------------------------------------------------
 * @param {number} token
 * @returns {boolean}  
 */
export function scLicenseplateGetCheckIsValid(token: number): boolean {
	const scLicenseplateGetCheckIsValid_result = Citizen.invokeNative<boolean>('0x095CCC9C5DC3BBF2', token);
	return scLicenseplateGetCheckIsValid_result;
}