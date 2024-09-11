import { EStatsenum, BoolRef } from '@ivanzaida/structures'

/**
 * STATS:STAT_GET_BOOL
 *
 * 0xF249567F2E83E093

 * 
 * ------------------------------------------------------------------
 * @param {EStatsenum} keyHash
 * @param {BoolRef} data [Ref]
 * @param {number} player
 * @returns {boolean}  
 */
export function statGetBool(keyHash: EStatsenum | number, data: BoolRef /* ptr */, player: number = 1): boolean {
	const statGetBool_result = Citizen.invokeNative<boolean>('0xF249567F2E83E093', keyHash, data.dataView, player);
	return statGetBool_result;
}