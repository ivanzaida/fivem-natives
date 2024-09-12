import { PedIndex } from '@ivanzaida/structures'

/**
 * TASK:GET_TASK_MOVE_NETWORK_STATE
 *
 * 0x9DC8697AB3A155E7

 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @returns {string}  
 */
export function getTaskMoveNetworkState(ped: PedIndex): string {
	const getTaskMoveNetworkState_result = Citizen.invokeNative<string>('0x9DC8697AB3A155E7', ped);
	return getTaskMoveNetworkState_result;
}