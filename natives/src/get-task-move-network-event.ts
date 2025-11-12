import { PedIndex } from '@ivanzaida/structures'

/**
 * TASK:GET_TASK_MOVE_NETWORK_EVENT
 *
 * 0xB6CFA448D6BF4690

 * 
 * Returns true if an event with the given name has just fired on the ped's script owned MoVE network
 * Can be used to trigger creation of objects in script, etc
 * Allows script to recieve named events from a running MoVE network
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {string} eventName
 * @returns {boolean}  
 */
export function getTaskMoveNetworkEvent(ped: PedIndex, eventName: string): boolean {
	const getTaskMoveNetworkEvent_result = Citizen.invokeNative<boolean>('0xB6CFA448D6BF4690', ped, eventName);
	return getTaskMoveNetworkEvent_result;
}