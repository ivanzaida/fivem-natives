import { EStatsenum, IntRef } from '@ivanzaida/structures'

/**
 * STATS:STAT_GET_INT
 *
 * 0xDF7F16323520B858

 * 
 * p2 appears to always be -1
 * 
 * 
 * ------------------------------------------------------------------
 * @param {EStatsenum} keyHash
 * @param {IntRef} data [Ref]
 * @param {number} player
 * @returns {boolean}  
 */
export function statGetInt(keyHash: EStatsenum | number, data: IntRef /* ptr */, player: number = 1): boolean {
	const statGetInt_result = Citizen.invokeNative<boolean>('0xDF7F16323520B858', keyHash, data.dataView, player);
	return statGetInt_result;
}