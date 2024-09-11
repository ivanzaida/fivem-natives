import { PedIndex } from '@ivanzaida/structures'

/**
 * CFX:TASK_REACT_AND_FLEE_PED
 *
 * 0X8A632BD8

 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {PedIndex} otherPed
 */
export function taskReactAndFleePed(ped: PedIndex, otherPed: PedIndex): void {
	const taskReactAndFleePed_result = Citizen.invokeNative<void>('0X8A632BD8', ped, otherPed);
	return taskReactAndFleePed_result;
}