import { EStatsenum, IntRef } from '@ivanzaida/structures'

/**
 * STATS:STAT_GET_MASKED_INT
 *
 * 0x1F1450A1F4852E10

 * 
 * p4 is probably characterSlot or BOOL save
 * 
 * 
 * ------------------------------------------------------------------
 * @param {EStatsenum} keyHash
 * @param {IntRef} data [Ref]
 * @param {number} offSet
 * @param {number} numberOfBits
 * @param {number} player
 * @returns {boolean}  
 */
export function statGetMaskedInt(keyHash: EStatsenum | number, data: IntRef /* ptr */, offSet: number, numberOfBits: number, player: number = 1): boolean {
	const statGetMaskedInt_result = Citizen.invokeNative<boolean>('0x1F1450A1F4852E10', keyHash, data.dataView, offSet, numberOfBits, player);
	return statGetMaskedInt_result;
}