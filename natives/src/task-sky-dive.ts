import { PedIndex } from '@ivanzaida/structures'

/**
 * TASK:TASK_SKY_DIVE
 *
 * 0xF9185EBA84883764

 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {boolean} instant
 */
export function taskSkyDive(ped: PedIndex, instant: boolean = false): void {
	const taskSkyDive_result = Citizen.invokeNative<void>('0xF9185EBA84883764', ped, instant);
	return taskSkyDive_result;
}