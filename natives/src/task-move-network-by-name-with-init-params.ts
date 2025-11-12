import { PedIndex, MoveInitialParameters, EMoveNetworkFlags } from '@ivanzaida/structures'

/**
 * TASK:TASK_MOVE_NETWORK_BY_NAME_WITH_INIT_PARAMS
 *
 * 0x9874D5FB1E8B02CB

 * 
 * Task to start a move network of the type passed
 * When bAllowOverrideCloneUpdate is used in MP the remotely cloned ped will not update in sync with commands sent locally
 * and it is expected that the remote machine will override the update of the clones task signals.
 * This version allows the network to be setup with initial parameters (clipsets, floats and bools).
 * 
 * Used only once in the scripts (am_mp_nightclub)
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {string} network
 * @param {MoveInitialParameters} initParams [Ref]
 * @param {number} blendDuration
 * @param {boolean} allowOverrideCloneUpdate
 * @param {string} animDictionary
 * @param {EMoveNetworkFlags} flags
 */
export function taskMoveNetworkByNameWithInitParams(ped: PedIndex, network: string, initParams: MoveInitialParameters /* ptr */, blendDuration: number = 0, allowOverrideCloneUpdate: boolean = false, animDictionary: string = null!, flags: EMoveNetworkFlags | number = 0): void {
	const taskMoveNetworkByNameWithInitParams_result = Citizen.invokeNative<void>('0x9874D5FB1E8B02CB', ped, network, initParams.dataView, blendDuration, allowOverrideCloneUpdate, animDictionary, flags);
	return taskMoveNetworkByNameWithInitParams_result;
}