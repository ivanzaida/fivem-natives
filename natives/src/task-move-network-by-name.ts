import { PedIndex, EMoveNetworkFlags } from '@ivanzaida/structures'

/**
 * TASK:TASK_MOVE_NETWORK_BY_NAME
 *
 * 0xBED82BCB158AC570

 * 
 * Task to start a move network of the type passed
 * When bAllowOverrideCloneUpdate is used in MP the remotely cloned ped will not update in sync with commands sent locally
 * and it is expected that the remote machine will override the update of the clones task signals.
 * 
 * Example:
 * TASK::TASK_MOVE_NETWORK_BY_NAME(PLAYER::PLAYER_PED_ID(), "arm_wrestling_sweep_paired_a_rev3", 0.0f, true, "mini@arm_wrestling", 0);
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {string} network
 * @param {number} blendDuration
 * @param {boolean} allowOverrideCloneUpdate
 * @param {string} animDictionary
 * @param {EMoveNetworkFlags} flags
 */
export function taskMoveNetworkByName(ped: PedIndex, network: string, blendDuration: number = 0, allowOverrideCloneUpdate: boolean = false, animDictionary: string = null!, flags: EMoveNetworkFlags | number = 0): void {
	const taskMoveNetworkByName_result = Citizen.invokeNative<void>('0xBED82BCB158AC570', ped, network, blendDuration, allowOverrideCloneUpdate, animDictionary, flags);
	return taskMoveNetworkByName_result;
}