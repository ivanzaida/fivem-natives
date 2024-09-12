import { PedIndex } from '@ivanzaida/structures'

/**
 * PED:IS_PED_RUNNING_RAGDOLL_TASK
 *
 * 0x86521C678E8AA3FF

 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @returns {boolean}  
 */
export function isPedRunningRagdollTask(ped: PedIndex): boolean {
	const isPedRunningRagdollTask_result = Citizen.invokeNative<boolean>('0x86521C678E8AA3FF', ped);
	return isPedRunningRagdollTask_result;
}