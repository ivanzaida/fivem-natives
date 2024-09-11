import { PedIndex } from '@ivanzaida/structures'

/**
 * PED:GET_PED_HELMET_STORED_HAT_TEX_INDEX
 *
 * 0xAA6E5BB6733B4BB0

 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @returns {number}  
 */
export function getPedHelmetStoredHatTexIndex(ped: PedIndex): number {
	const getPedHelmetStoredHatTexIndex_result = Citizen.invokeNative<number>('0xAA6E5BB6733B4BB0', ped);
	return getPedHelmetStoredHatTexIndex_result;
}