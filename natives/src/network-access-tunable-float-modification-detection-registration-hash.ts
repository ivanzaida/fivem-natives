import { FloatRef } from '@ivanzaida/structures'

/**
 * NETWORK:NETWORK_ACCESS_TUNABLE_FLOAT_MODIFICATION_DETECTION_REGISTRATION_HASH
 *
 * 0xA517819975B6DC39

 * 
 * ------------------------------------------------------------------
 * @param {number} contextHash
 * @param {number} tunableHash
 * @param {FloatRef} tunable [Ref]
 * @returns {boolean}  
 */
export function networkAccessTunableFloatModificationDetectionRegistrationHash(contextHash: number, tunableHash: number, tunable: FloatRef /* ptr */): boolean {
	const networkAccessTunableFloatModificationDetectionRegistrationHash_result = Citizen.invokeNative<boolean>('0xA517819975B6DC39', contextHash, tunableHash, tunable.dataView);
	return networkAccessTunableFloatModificationDetectionRegistrationHash_result;
}