import { PedIndex, EEwdrScriptFlags } from '@ivanzaida/structures'

/**
 * TASK:TASK_WANDER_STANDARD
 *
 * 0x761F56E633460973

 * 
 * Makes ped walk around the area.
 * 
 * set p1 to 10.0f and p2 to 10 if you want the ped to walk anywhere without a duration.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {number} heading
 * @param {EEwdrScriptFlags} wanderFlags
 */
export function taskWanderStandard(ped: PedIndex, heading: number = 40000, wanderFlags: EEwdrScriptFlags | number = 0): void {
	const taskWanderStandard_result = Citizen.invokeNative<void>('0x761F56E633460973', ped, heading, wanderFlags);
	return taskWanderStandard_result;
}