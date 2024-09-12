import { IntRef } from '@ivanzaida/structures'

/**
 * NETWORK:NETWORK_ACCESS_TUNABLE_INT_HASH
 *
 * 0x3924757A6ED5FEDB

 * 
 * ------------------------------------------------------------------
 * @param {number} contextHash
 * @param {number} tunableHash
 * @param {IntRef} tunable [Ref]
 * @returns {boolean}  
 */
export function networkAccessTunableIntHash(contextHash: number, tunableHash: number, tunable: IntRef /* ptr */): boolean {
	const networkAccessTunableIntHash_result = Citizen.invokeNative<boolean>('0x3924757A6ED5FEDB', contextHash, tunableHash, tunable.dataView);
	return networkAccessTunableIntHash_result;
}