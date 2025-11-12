import { EStatsenum, BoolRef } from '@ivanzaida/structures'

/**
 * HUD:GET_MENU_PED_BOOL_STAT
 *
 * 0xE72DC686E764EE0F

 * 
 * p0 was always 0xAE2602A3.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {EStatsenum} keyHash
 * @param {BoolRef} data [Ref]
 * @returns {boolean}  
 */
export function getMenuPedBoolStat(keyHash: EStatsenum | number, data: BoolRef /* ptr */): boolean {
	const getMenuPedBoolStat_result = Citizen.invokeNative<boolean>('0xE72DC686E764EE0F', keyHash, data.dataView);
	return getMenuPedBoolStat_result;
}