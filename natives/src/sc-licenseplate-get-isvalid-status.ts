import { EELicenseplateIsvalidStatus } from '@ivanzaida/structures'

/**
 * SOCIALCLUB:SC_LICENSEPLATE_GET_ISVALID_STATUS
 *
 * 0x9B55331B5F9C67C8

 * 
 * Use SC_LICENSEPLATE_GET_ISVALID_IS_PENDING() and wait for the request to finish.  Once
 * it's finished, use SC_LICENSEPLATE_GET_ISVALID_STATUS() to get the status of the result.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} token
 * @returns {EELicenseplateIsvalidStatus}  
 */
export function scLicenseplateGetIsvalidStatus(token: number): EELicenseplateIsvalidStatus {
	const scLicenseplateGetIsvalidStatus_result = Citizen.invokeNative<EELicenseplateIsvalidStatus>('0x9B55331B5F9C67C8', token);
	return scLicenseplateGetIsvalidStatus_result;
}