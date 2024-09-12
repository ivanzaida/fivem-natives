import { IntRef } from '@ivanzaida/structures'

/**
 * NETWORK:NETWORK_ACCESS_TUNABLE_INT_MODIFICATION_DETECTION_REGISTRATION_HASH
 *
 * 0xDF6F5F7DECDD6CA3

 * 
 * ------------------------------------------------------------------
 * @param {number} contextHash
 * @param {number} tunableHash
 * @param {IntRef} tunable [Ref]
 * @returns {boolean}  
 */
export function networkAccessTunableIntModificationDetectionRegistrationHash(contextHash: number, tunableHash: number, tunable: IntRef /* ptr */): boolean {
	const networkAccessTunableIntModificationDetectionRegistrationHash_result = Citizen.invokeNative<boolean>('0xDF6F5F7DECDD6CA3', contextHash, tunableHash, tunable.dataView);
	return networkAccessTunableIntModificationDetectionRegistrationHash_result;
}