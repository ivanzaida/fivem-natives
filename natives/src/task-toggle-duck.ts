import { PedIndex, EDuckToggle } from '@ivanzaida/structures'

/**
 * TASK:TASK_TOGGLE_DUCK
 *
 * 0x613C57A8216F81FC

 * 
 * used in sequence task
 * 
 * both parameters seems to be always 0
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {EDuckToggle} toggle
 */
export function taskToggleDuck(ped: PedIndex, toggle: EDuckToggle | number): void {
	const taskToggleDuck_result = Citizen.invokeNative<void>('0x613C57A8216F81FC', ped, toggle);
	return taskToggleDuck_result;
}