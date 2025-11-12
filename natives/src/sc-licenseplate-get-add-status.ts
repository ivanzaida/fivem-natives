import { EELicenseplateAddStatus } from '@ivanzaida/structures'

/**
 * SOCIALCLUB:SC_LICENSEPLATE_GET_ADD_STATUS
 *
 * 0x2A1E3EE300513E84

 * 
 * Use SC_LICENSEPLATE_GET_ADD_IS_PENDING() and wait for the request to finish.  Once
 * it's finished, use SC_LICENSEPLATE_GET_ADD_STATUS() to get the status of the result.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} token
 * @returns {EELicenseplateAddStatus}  
 */
export function scLicenseplateGetAddStatus(token: number): EELicenseplateAddStatus {
	const scLicenseplateGetAddStatus_result = Citizen.invokeNative<EELicenseplateAddStatus>('0x2A1E3EE300513E84', token);
	return scLicenseplateGetAddStatus_result;
}