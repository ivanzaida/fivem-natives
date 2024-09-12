import { EStatsenum, IntRef } from '@ivanzaida/structures'

/**
 * HUD:GET_CHARACTER_MENU_PED_INT_STAT
 *
 * 0x97A3FD175F8D720C

 * 
 * ------------------------------------------------------------------
 * @param {EStatsenum} keyHash
 * @param {IntRef} data [Ref]
 * @param {number} characterSlot
 * @returns {boolean}  
 */
export function getCharacterMenuPedIntStat(keyHash: EStatsenum | number, data: IntRef /* ptr */, characterSlot: number = 1): boolean {
	const getCharacterMenuPedIntStat_result = Citizen.invokeNative<boolean>('0x97A3FD175F8D720C', keyHash, data.dataView, characterSlot);
	return getCharacterMenuPedIntStat_result;
}