import { PedIndex } from '@ivanzaida/structures'

/**
 * PED:SET_PED_DEFAULT_COMPONENT_VARIATION
 *
 * 0x77EFA99E6A8FFC43

 * 
 * his might be useful if you create a ped, delete him and then create him again later and need him to look identical to his first appearance.
 * 
 * Sets Ped Default Clothes
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 */
export function setPedDefaultComponentVariation(ped: PedIndex): void {
	const setPedDefaultComponentVariation_result = Citizen.invokeNative<void>('0x77EFA99E6A8FFC43', ped);
	return setPedDefaultComponentVariation_result;
}