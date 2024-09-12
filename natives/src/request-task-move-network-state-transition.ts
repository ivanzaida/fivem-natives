import { PedIndex } from '@ivanzaida/structures'

/**
 * TASK:REQUEST_TASK_MOVE_NETWORK_STATE_TRANSITION
 *
 * 0x442A7753A4EB7411

 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {string} stateName
 * @returns {boolean}  
 */
export function requestTaskMoveNetworkStateTransition(ped: PedIndex, stateName: string): boolean {
	const requestTaskMoveNetworkStateTransition_result = Citizen.invokeNative<boolean>('0x442A7753A4EB7411', ped, stateName);
	return requestTaskMoveNetworkStateTransition_result;
}