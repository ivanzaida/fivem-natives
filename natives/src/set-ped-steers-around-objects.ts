import { PedIndex } from '@ivanzaida/structures'

/**
 * PED:SET_PED_STEERS_AROUND_OBJECTS
 *
 * 0xD6218A048A54AAB5

 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {boolean} state
 */
export function setPedSteersAroundObjects(ped: PedIndex, state: boolean): void {
	const setPedSteersAroundObjects_result = Citizen.invokeNative<void>('0xD6218A048A54AAB5', ped, state);
	return setPedSteersAroundObjects_result;
}