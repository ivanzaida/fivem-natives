import { EStatsenum, FloatRef } from '@ivanzaida/structures'

/**
 * HUD:GET_CHARACTER_MENU_PED_FLOAT_STAT
 *
 * 0xA3DF89A2303DA964

 * 
 * ------------------------------------------------------------------
 * @param {EStatsenum} keyHash
 * @param {FloatRef} data [Ref]
 * @param {number} characterSlot
 * @returns {boolean}  
 */
export function getCharacterMenuPedFloatStat(keyHash: EStatsenum | number, data: FloatRef /* ptr */, characterSlot: number = 1): boolean {
	const getCharacterMenuPedFloatStat_result = Citizen.invokeNative<boolean>('0xA3DF89A2303DA964', keyHash, data.dataView, characterSlot);
	return getCharacterMenuPedFloatStat_result;
}