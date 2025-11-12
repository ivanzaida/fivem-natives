import { PedIndex } from '@ivanzaida/structures'

/**
 * PED:SET_BLOCKING_OF_NON_TEMPORARY_EVENTS
 *
 * 0xAAA71DD7E9059338

 * 
 * The main use of this function is to prevent peds from reacting to interrupting events when you want them to be under script control.
 * e.g. To tell a ped to run past a hated ped but ignoring the reaction to attack, set blocking to true at the start, then back to false once the task is completed.
 * 
 * works with TASK::TASK_SET_BLOCKING_OF_NON_TEMPORARY_EVENTS to make a ped completely oblivious to all events going on around him
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {boolean} blockEvents
 */
export function setBlockingOfNonTemporaryEvents(ped: PedIndex, blockEvents: boolean): void {
	const setBlockingOfNonTemporaryEvents_result = Citizen.invokeNative<void>('0xAAA71DD7E9059338', ped, blockEvents);
	return setBlockingOfNonTemporaryEvents_result;
}