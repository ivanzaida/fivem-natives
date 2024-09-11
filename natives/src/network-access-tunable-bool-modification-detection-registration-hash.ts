import { BoolRef } from '@ivanzaida/structures'

/**
 * NETWORK:NETWORK_ACCESS_TUNABLE_BOOL_MODIFICATION_DETECTION_REGISTRATION_HASH
 *
 * 0xC9DC4A70BE727818

 * 
 * ------------------------------------------------------------------
 * @param {number} contextHash
 * @param {number} tunableHash
 * @param {BoolRef} tunable [Ref]
 * @returns {boolean}  
 */
export function networkAccessTunableBoolModificationDetectionRegistrationHash(contextHash: number, tunableHash: number, tunable: BoolRef /* ptr */): boolean {
	const networkAccessTunableBoolModificationDetectionRegistrationHash_result = Citizen.invokeNative<boolean>('0xC9DC4A70BE727818', contextHash, tunableHash, tunable.dataView);
	return networkAccessTunableBoolModificationDetectionRegistrationHash_result;
}