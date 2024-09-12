import { EStatsenum } from '@ivanzaida/structures'

/**
 * STATS:STAT_SET_USER_ID
 *
 * 0xD13EF24D43A8E864

 * 
 * ------------------------------------------------------------------
 * @param {EStatsenum} keyHash
 * @param {string} data
 * @param {boolean} coderAssert
 * @returns {boolean}  
 */
export function statSetUserId(keyHash: EStatsenum | number, data: string, coderAssert: boolean = true): boolean {
	const statSetUserId_result = Citizen.invokeNative<boolean>('0xD13EF24D43A8E864', keyHash, data, coderAssert);
	return statSetUserId_result;
}