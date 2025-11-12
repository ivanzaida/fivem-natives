import { PedIndex } from '@ivanzaida/structures'

/**
 * PED:ADD_ARMOUR_TO_PED
 *
 * 0x2E20E7B6C4BBA61D

 * 
 * Same as SET_PED_ARMOUR, but ADDS 'amount' to the armor the Ped already has.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {number} armourToAdd
 */
export function addArmourToPed(ped: PedIndex, armourToAdd: number): void {
	const addArmourToPed_result = Citizen.invokeNative<void>('0x2E20E7B6C4BBA61D', ped, armourToAdd);
	return addArmourToPed_result;
}