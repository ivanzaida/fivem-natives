import { PedIndex } from '@ivanzaida/structures'

/**
 * TASK:CLEAR_PED_TASKS_IMMEDIATELY
 *
 * 0x19626F992DC71FB9

 * 
 * This should only be used when CLEAR_PED_TASKS does not work
 * 
 * Immediately stops the pedestrian from whatever it's doing. They stop fighting, animations, etc. they forget what they were doing.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 */
export function clearPedTasksImmediately(ped: PedIndex): void {
	const clearPedTasksImmediately_result = Citizen.invokeNative<void>('0x19626F992DC71FB9', ped);
	return clearPedTasksImmediately_result;
}