import { PedIndex, ECodeTask } from '@ivanzaida/structures'

/**
 * TASK:GET_IS_TASK_ACTIVE
 *
 * 0x12623527E5B8AB7C

 * 
 * Task index enum: https://alloc8or.re/gta5/doc/enums/eTaskTypeIndex.txt
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {ECodeTask} taskID
 * @returns {boolean}  
 */
export function getIsTaskActive(ped: PedIndex, taskID: ECodeTask | number): boolean {
	const getIsTaskActive_result = Citizen.invokeNative<boolean>('0x12623527E5B8AB7C', ped, taskID);
	return getIsTaskActive_result;
}