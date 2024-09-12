import { PedIndex } from '@ivanzaida/structures'

/**
 * CFX:SET_PED_HAIR_TINT
 *
 * 0xA23FE32C

 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {number} tint
 * @param {number} tint2
 */
export function setPedHairTint(ped: PedIndex, tint: number, tint2: number = 0): void {
	const setPedHairTint_result = Citizen.invokeNative<void>('0xA23FE32C', ped, tint, tint2);
	return setPedHairTint_result;
}