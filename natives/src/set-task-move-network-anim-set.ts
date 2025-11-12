import { PedIndex } from '@ivanzaida/structures'

/**
 * TASK:SET_TASK_MOVE_NETWORK_ANIM_SET
 *
 * 0x92DF696E2104166F

 * 
 * The anim set hash is a hash of the name of the actual anim set to use
 * The animSetVariableHash is the has of the name of the variable anim set you are setting, and should start with a $ symbol
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {number} animSetHash
 * @param {number} animSetVariableHash
 */
export function setTaskMoveNetworkAnimSet(ped: PedIndex, animSetHash: number, animSetVariableHash: number = 0): void {
	const setTaskMoveNetworkAnimSet_result = Citizen.invokeNative<void>('0x92DF696E2104166F', ped, animSetHash, animSetVariableHash);
	return setTaskMoveNetworkAnimSet_result;
}