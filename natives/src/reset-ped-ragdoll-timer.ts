import { PedIndex } from '@ivanzaida/structures'

/**
 * PED:RESET_PED_RAGDOLL_TIMER
 *
 * 0xBD1B952A9BBB567F

 * 
 * Use to reset the start time of a Natural Motion task. For specific scenarios where timeout (and return to animation) must
 * be avoided, call this every frame.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 */
export function resetPedRagdollTimer(ped: PedIndex): void {
	const resetPedRagdollTimer_result = Citizen.invokeNative<void>('0xBD1B952A9BBB567F', ped);
	return resetPedRagdollTimer_result;
}