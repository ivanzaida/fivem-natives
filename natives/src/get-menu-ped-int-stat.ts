import { EStatsenum, IntRef } from '@ivanzaida/structures'

/**
 * HUD:GET_MENU_PED_INT_STAT
 *
 * 0x074484B0C0972EF8

 * 
 * ------------------------------------------------------------------
 * @param {EStatsenum} keyHash
 * @param {IntRef} data [Ref]
 * @returns {boolean}  
 */
export function getMenuPedIntStat(keyHash: EStatsenum | number, data: IntRef /* ptr */): boolean {
	const getMenuPedIntStat_result = Citizen.invokeNative<boolean>('0x074484B0C0972EF8', keyHash, data.dataView);
	return getMenuPedIntStat_result;
}