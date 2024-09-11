import { EStatsenum } from '@ivanzaida/structures'

/**
 * STATS:STAT_SET_STRING
 *
 * 0x1A43F9BE4B6AAB67

 * 
 * ------------------------------------------------------------------
 * @param {EStatsenum} keyHash
 * @param {string} data
 * @param {boolean} coderAssert
 * @returns {boolean}  
 */
export function statSetString(keyHash: EStatsenum | number, data: string, coderAssert: boolean = true): boolean {
	const statSetString_result = Citizen.invokeNative<boolean>('0x1A43F9BE4B6AAB67', keyHash, data, coderAssert);
	return statSetString_result;
}