import { PedIndex } from '@ivanzaida/structures'

/**
 * TASK:IS_TASK_MOVE_NETWORK_ACTIVE
 *
 * 0xB2E8986FED6B1539

 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @returns {boolean}  
 */
export function isTaskMoveNetworkActive(ped: PedIndex): boolean {
	const isTaskMoveNetworkActive_result = Citizen.invokeNative<boolean>('0xB2E8986FED6B1539', ped);
	return isTaskMoveNetworkActive_result;
}