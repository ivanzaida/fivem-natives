import { PedIndex } from '@ivanzaida/structures'

/**
 * PED:SET_PED_KEEP_TASK
 *
 * 0x44FB298D6382876D

 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {boolean} keepTasksFlag
 */
export function setPedKeepTask(ped: PedIndex, keepTasksFlag: boolean): void {
	const setPedKeepTask_result = Citizen.invokeNative<void>('0x44FB298D6382876D', ped, keepTasksFlag);
	return setPedKeepTask_result;
}