import { PedIndex } from '@ivanzaida/structures'

/**
 * TASK:TASK_REACT_AND_FLEE_PED
 *
 * 0x3EE6720350A31CAB

 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {PedIndex} otherPed
 */
export function taskReactAndFleePed(ped: PedIndex, otherPed: PedIndex): void {
	const taskReactAndFleePed_result = Citizen.invokeNative<void>('0x3EE6720350A31CAB', ped, otherPed);
	return taskReactAndFleePed_result;
}