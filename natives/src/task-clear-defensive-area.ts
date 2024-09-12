import { PedIndex } from '@ivanzaida/structures'

/**
 * TASK:TASK_CLEAR_DEFENSIVE_AREA
 *
 * 0x16C7AB5DAFB71459

 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 */
export function taskClearDefensiveArea(ped: PedIndex): void {
	const taskClearDefensiveArea_result = Citizen.invokeNative<void>('0x16C7AB5DAFB71459', ped);
	return taskClearDefensiveArea_result;
}