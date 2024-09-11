import { EStatsenum, IntRef } from '@ivanzaida/structures'

/**
 * HUD:GET_MENU_PED_MASKED_INT_STAT
 *
 * 0x77B8D5FD0CF3258F

 * 
 * ------------------------------------------------------------------
 * @param {EStatsenum} keyHash
 * @param {IntRef} data [Ref]
 * @param {number} offSet
 * @param {number} numberOfBits
 * @returns {boolean}  
 */
export function getMenuPedMaskedIntStat(keyHash: EStatsenum | number, data: IntRef /* ptr */, offSet: number, numberOfBits: number): boolean {
	const getMenuPedMaskedIntStat_result = Citizen.invokeNative<boolean>('0x77B8D5FD0CF3258F', keyHash, data.dataView, offSet, numberOfBits);
	return getMenuPedMaskedIntStat_result;
}