import { EStatsenum, IntRef } from '@ivanzaida/structures'

/**
 * HUD:GET_CHARACTER_MENU_PED_MASKED_INT_STAT
 *
 * 0x2D43CD41AC3330E1

 * 
 * This allows scripters to specify a character slot.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {EStatsenum} keyHash
 * @param {IntRef} data [Ref]
 * @param {number} offSet
 * @param {number} numberOfBits
 * @param {number} characterSlot
 * @returns {boolean}  
 */
export function getCharacterMenuPedMaskedIntStat(keyHash: EStatsenum | number, data: IntRef /* ptr */, offSet: number, numberOfBits: number, characterSlot: number): boolean {
	const getCharacterMenuPedMaskedIntStat_result = Citizen.invokeNative<boolean>('0x2D43CD41AC3330E1', keyHash, data.dataView, offSet, numberOfBits, characterSlot);
	return getCharacterMenuPedMaskedIntStat_result;
}