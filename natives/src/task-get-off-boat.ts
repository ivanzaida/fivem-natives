import { PedIndex } from '@ivanzaida/structures'

/**
 * TASK:TASK_GET_OFF_BOAT
 *
 * 0x693BCB64E0E60254

 * 
 * There is no need to specify a boat, as the task itself will figure out which boat is underneath the ped.
 * This task does a number of linetests and is thus pretty expensive, so use with care (ie. not repeatedly!)
 * This task is automatically given to group peds, if they are on a boat but their leader is not.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {number} timer
 */
export function taskGetOffBoat(ped: PedIndex, timer: number = 20000): void {
	const taskGetOffBoat_result = Citizen.invokeNative<void>('0x693BCB64E0E60254', ped, timer);
	return taskGetOffBoat_result;
}