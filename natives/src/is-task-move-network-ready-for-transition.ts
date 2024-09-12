import { PedIndex } from '@ivanzaida/structures'

/**
 * TASK:IS_TASK_MOVE_NETWORK_READY_FOR_TRANSITION
 *
 * 0x998B35A7F4D0F0C7

 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @returns {boolean}  
 */
export function isTaskMoveNetworkReadyForTransition(ped: PedIndex): boolean {
	const isTaskMoveNetworkReadyForTransition_result = Citizen.invokeNative<boolean>('0x998B35A7F4D0F0C7', ped);
	return isTaskMoveNetworkReadyForTransition_result;
}