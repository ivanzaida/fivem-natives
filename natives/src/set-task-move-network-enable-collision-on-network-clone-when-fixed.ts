import { PedIndex } from '@ivanzaida/structures'

/**
 * TASK:SET_TASK_MOVE_NETWORK_ENABLE_COLLISION_ON_NETWORK_CLONE_WHEN_FIXED
 *
 * 0x4A27E73B31F943DC

 * 
 * Doesn't actually return anything.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {boolean} enableCollisionOnNetworkCloneWhenFixed
 * @returns {boolean}  
 */
export function setTaskMoveNetworkEnableCollisionOnNetworkCloneWhenFixed(ped: PedIndex, enableCollisionOnNetworkCloneWhenFixed: boolean): boolean {
	const setTaskMoveNetworkEnableCollisionOnNetworkCloneWhenFixed_result = Citizen.invokeNative<boolean>('0x4A27E73B31F943DC', ped, enableCollisionOnNetworkCloneWhenFixed);
	return setTaskMoveNetworkEnableCollisionOnNetworkCloneWhenFixed_result;
}