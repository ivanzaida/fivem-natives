import { PedIndex } from '@ivanzaida/structures'

/**
 * PED:SET_PED_CLOTH_PRONE
 *
 * 0x8AADE09D284D2B86

 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {boolean} val
 */
export function setPedClothProne(ped: PedIndex, val: boolean): void {
	const setPedClothProne_result = Citizen.invokeNative<void>('0x8AADE09D284D2B86', ped, val);
	return setPedClothProne_result;
}