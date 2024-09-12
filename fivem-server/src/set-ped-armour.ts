import { PedIndex } from '@ivanzaida/structures'

/**
 * CFX:SET_PED_ARMOUR
 *
 * 0X4E3A0CC4

 * Sets the armor of the specified ped.
 * ped: The Ped to set the armor of.
 * amount: A value between 0 and 100 indicating the value to set the Ped's armor to.
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {number} armour
 */
export function setPedArmour(ped: PedIndex, armour: number): void {
	const setPedArmour_result = Citizen.invokeNative<void>('0X4E3A0CC4', ped, armour);
	return setPedArmour_result;
}