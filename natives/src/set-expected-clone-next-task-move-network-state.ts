import { PedIndex } from '@ivanzaida/structures'

/**
 * TASK:SET_EXPECTED_CLONE_NEXT_TASK_MOVE_NETWORK_STATE
 *
 * 0xA6C2BBE598A91988

 * 
 * To be used for particular move networks after REQUEST_TASK_MOVE_NETWORK_STATE_TRANSITION when the request will expect to cause the Move Network to
 * automatically eventually progress to the queued MoVE state. Setting this syncs to remote machine and alerts the remote clone to scan for this state
 * 
 * Used only once in the scripts (fm_mission_controller) like so:
 * 
 * TASK::SET_EXPECTED_CLONE_NEXT_TASK_MOVE_NETWORK_STATE(iLocal_3160, "Cutting");
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {string} stateName
 * @returns {boolean}  
 */
export function setExpectedCloneNextTaskMoveNetworkState(ped: PedIndex, stateName: string): boolean {
	const setExpectedCloneNextTaskMoveNetworkState_result = Citizen.invokeNative<boolean>('0xA6C2BBE598A91988', ped, stateName);
	return setExpectedCloneNextTaskMoveNetworkState_result;
}