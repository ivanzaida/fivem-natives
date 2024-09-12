/**
 * SOCIALCLUB:SC_LICENSEPLATE_GET_ISVALID_IS_PENDING
 *
 * 0x078BF797A07B0C7C

 * 
 * ------------------------------------------------------------------
 * @param {number} token
 * @returns {boolean}  
 */
export function scLicenseplateGetIsvalidIsPending(token: number): boolean {
	const scLicenseplateGetIsvalidIsPending_result = Citizen.invokeNative<boolean>('0x078BF797A07B0C7C', token);
	return scLicenseplateGetIsvalidIsPending_result;
}