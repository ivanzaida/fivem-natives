import { PedIndex } from '@ivanzaida/structures'

/**
 * TASK:TASK_SHOCKING_EVENT_REACT
 *
 * 0xDBFFE049CC0EA5E0

 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {number} shockingEventId
 */
export function taskShockingEventReact(ped: PedIndex, shockingEventId: number): void {
	const taskShockingEventReact_result = Citizen.invokeNative<void>('0xDBFFE049CC0EA5E0', ped, shockingEventId);
	return taskShockingEventReact_result;
}