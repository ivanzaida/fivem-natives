import { EStatsenum } from '@ivanzaida/structures'

/**
 * STATS:STAT_GET_DATE
 *
 * 0x22F25CEE5BAA4944

 * 
 * p3 is probably characterSlot or BOOL save, always -1
 * 
 * 
 * ------------------------------------------------------------------
 * @param {EStatsenum} keyHash
 * @param {DataView} data [Ref]
 * @param {number} sizeOfData
 * @param {number} player
 * @returns {boolean}  
 */
export function statGetDate(keyHash: EStatsenum | number, data: DataView /* ptr */, sizeOfData: number, player: number = 1): boolean {
	const statGetDate_result = Citizen.invokeNative<boolean>('0x22F25CEE5BAA4944', keyHash, data, sizeOfData, player);
	return statGetDate_result;
}