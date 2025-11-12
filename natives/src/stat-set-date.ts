import { EStatsenum } from '@ivanzaida/structures'

/**
 * STATS:STAT_SET_DATE
 *
 * 0x8FDC19B6566720CA

 * 
 * 'value' is a structure to a structure, 'numFields' is how many fields there are in said structure (usually 7).
 * 
 * The structure looks like this:
 * 
 * int year
 * int month
 * int day
 * int hour
 * int minute
 * int second
 * int millisecond
 * 
 * The decompiled scripts use TIME::GET_POSIX_TIME to fill this structure.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {EStatsenum} keyHash
 * @param {DataView} data [Ref]
 * @param {number} sizeOfData
 * @param {boolean} coderAssert
 * @returns {boolean}  
 */
export function statSetDate(keyHash: EStatsenum | number, data: DataView /* ptr */, sizeOfData: number, coderAssert: boolean = true): boolean {
	const statSetDate_result = Citizen.invokeNative<boolean>('0x8FDC19B6566720CA', keyHash, data, sizeOfData, coderAssert);
	return statSetDate_result;
}