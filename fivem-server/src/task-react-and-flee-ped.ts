import { PedIndex } from '@ivanzaida/structures'

/**
 * CFX:TASK_REACT_AND_FLEE_PED
 *
 * 0x8A632BD8

 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {PedIndex} fleeTarget
 */
export function taskReactAndFleePed(ped: PedIndex, fleeTarget: PedIndex): void {
	const taskReactAndFleePed_result = Citizen.invokeNative<void>('0x8A632BD8', ped, fleeTarget);
	return taskReactAndFleePed_result;
}