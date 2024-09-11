import { PedIndex } from '@ivanzaida/structures'

/**
 * PED:SET_PED_HAIR_TINT
 *
 * 0x894EE2587C8D8D1E

 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {number} tint
 * @param {number} tint2
 */
export function setPedHairTint(ped: PedIndex, tint: number, tint2: number = 0): void {
	const setPedHairTint_result = Citizen.invokeNative<void>('0x894EE2587C8D8D1E', ped, tint, tint2);
	return setPedHairTint_result;
}