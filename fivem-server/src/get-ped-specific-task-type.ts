import { PedIndex } from '@ivanzaida/structures'

/**
 * CFX:GET_PED_SPECIFIC_TASK_TYPE
 *
 * 0x7F4563D3

 * Gets the type of a ped's specific task given an index of the CPedTaskSpecificDataNode nodes.A ped will typically have a task at index 0, if a ped has multiple tasks at once they will be in the order 0, 1, 2, etc.
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped The target ped.
 * @param {number} index A zerobased index with a maximum value of 7.
 * @returns {number}  The type of the specific task.
1604: A value of 530 denotes no script task is assigned or an invalid input was given.
2060+: A value of 531 denotes no script task is assigned or an invalid input was given.
 */
export function getPedSpecificTaskType(ped: PedIndex, index: number): number {
	const getPedSpecificTaskType_result = Citizen.invokeNative<number>('0x7F4563D3', ped, index);
	return getPedSpecificTaskType_result;
}