import { EStatsenum } from '@ivanzaida/structures'

/**
 * STATS:STAT_SET_MASKED_INT
 *
 * 0xCC11C02D491BBBBB

 * 
 * ------------------------------------------------------------------
 * @param {EStatsenum} keyHash
 * @param {number} data
 * @param {number} offSet
 * @param {number} numberOfBits
 * @param {boolean} coderAssert
 * @returns {boolean}  
 */
export function statSetMaskedInt(keyHash: EStatsenum | number, data: number, offSet: number, numberOfBits: number, coderAssert: boolean = true): boolean {
	const statSetMaskedInt_result = Citizen.invokeNative<boolean>('0xCC11C02D491BBBBB', keyHash, data, offSet, numberOfBits, coderAssert);
	return statSetMaskedInt_result;
}