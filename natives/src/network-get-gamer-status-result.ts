import { NetworkGetGamerStatusResultStruct } from '@ivanzaida/structures'

/**
 * NETWORK:NETWORK_GET_GAMER_STATUS_RESULT
 *
 * 0x08A4CF1E65E8A0EC

 * 
 * ------------------------------------------------------------------
 * @param {NetworkGetGamerStatusResultStruct} result [Ref]
 * @param {number} index
 * @returns {boolean}  
 */
export function networkGetGamerStatusResult(result: NetworkGetGamerStatusResultStruct /* ptr */, index: number): boolean {
	const networkGetGamerStatusResult_result = Citizen.invokeNative<boolean>('0x08A4CF1E65E8A0EC', result.dataView, index);
	return networkGetGamerStatusResult_result;
}