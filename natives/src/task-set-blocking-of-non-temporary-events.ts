import { PedIndex } from '@ivanzaida/structures'

/**
 * TASK:TASK_SET_BLOCKING_OF_NON_TEMPORARY_EVENTS
 *
 * 0x96F4A599D1C6F95A

 * 
 * I cant believe I have to define this, this is one of the best natives.
 * 
 * It makes the ped ignore basically all shocking events around it. Occasionally the ped may comment or gesture, but other than that they just continue their daily activities. This includes shooting and wounding the ped. And - most importantly - they do not flee.
 * 
 * Since it is a task, every time the native is called the ped will stop for a moment.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {boolean} set
 */
export function taskSetBlockingOfNonTemporaryEvents(ped: PedIndex, set: boolean): void {
	const taskSetBlockingOfNonTemporaryEvents_result = Citizen.invokeNative<void>('0x96F4A599D1C6F95A', ped, set);
	return taskSetBlockingOfNonTemporaryEvents_result;
}