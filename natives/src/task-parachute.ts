import { PedIndex } from '@ivanzaida/structures'

/**
 * TASK:TASK_PARACHUTE
 *
 * 0x2A82E9CBC48CF2F8

 * 
 * Second parameter is unused.
 * 
 * second parameter was for jetpack in the early stages of gta and the hard coded code is now removed
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {boolean} giveParachuteItem
 * @param {boolean} instant
 */
export function taskParachute(ped: PedIndex, giveParachuteItem: boolean, instant: boolean = false): void {
	const taskParachute_result = Citizen.invokeNative<void>('0x2A82E9CBC48CF2F8', ped, giveParachuteItem, instant);
	return taskParachute_result;
}