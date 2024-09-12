import { PedIndex } from '@ivanzaida/structures'

/**
 * PED:SET_PED_STEERS_AROUND_DEAD_BODIES
 *
 * 0xB18666D28D4F44C5

 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {boolean} state
 */
export function setPedSteersAroundDeadBodies(ped: PedIndex, state: boolean): void {
	const setPedSteersAroundDeadBodies_result = Citizen.invokeNative<void>('0xB18666D28D4F44C5', ped, state);
	return setPedSteersAroundDeadBodies_result;
}