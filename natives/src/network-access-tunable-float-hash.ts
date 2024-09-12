import { FloatRef } from '@ivanzaida/structures'

/**
 * NETWORK:NETWORK_ACCESS_TUNABLE_FLOAT_HASH
 *
 * 0xA484A1273D8798FF

 * 
 * ------------------------------------------------------------------
 * @param {number} contextHash
 * @param {number} tunableHash
 * @param {FloatRef} tunable [Ref]
 * @returns {boolean}  
 */
export function networkAccessTunableFloatHash(contextHash: number, tunableHash: number, tunable: FloatRef /* ptr */): boolean {
	const networkAccessTunableFloatHash_result = Citizen.invokeNative<boolean>('0xA484A1273D8798FF', contextHash, tunableHash, tunable.dataView);
	return networkAccessTunableFloatHash_result;
}