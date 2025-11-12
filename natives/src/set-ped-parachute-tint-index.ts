import { PedIndex } from '@ivanzaida/structures'

/**
 * PED:SET_PED_PARACHUTE_TINT_INDEX
 *
 * 0xD23AAC1FA1C1571E

 * 
 * This function sets the tint index of the parachute for the ped
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {number} tint
 */
export function setPedParachuteTintIndex(ped: PedIndex, tint: number): void {
	const setPedParachuteTintIndex_result = Citizen.invokeNative<void>('0xD23AAC1FA1C1571E', ped, tint);
	return setPedParachuteTintIndex_result;
}