import { EStatsenum, FloatRef } from '@ivanzaida/structures'

/**
 * HUD:GET_MENU_PED_FLOAT_STAT
 *
 * 0xE1A5C172B921BBD6

 * 
 * ------------------------------------------------------------------
 * @param {EStatsenum} keyHash
 * @param {FloatRef} data [Ref]
 * @returns {boolean}  
 */
export function getMenuPedFloatStat(keyHash: EStatsenum | number, data: FloatRef /* ptr */): boolean {
	const getMenuPedFloatStat_result = Citizen.invokeNative<boolean>('0xE1A5C172B921BBD6', keyHash, data.dataView);
	return getMenuPedFloatStat_result;
}