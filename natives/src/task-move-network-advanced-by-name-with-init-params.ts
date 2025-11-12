import { PedIndex, MoveInitialParameters, EEulerRotOrder, EMoveNetworkFlags } from '@ivanzaida/structures'

/**
 * TASK:TASK_MOVE_NETWORK_ADVANCED_BY_NAME_WITH_INIT_PARAMS
 *
 * 0xF73EE77793731309

 * 
 * Task to start a move network of the type passed with custom start pos and orientation
 * When bAllowOverrideCloneUpdate is used in MP the remotely cloned ped will not update in sync with commands sent locally
 * and it is expected that the remote machine will override the update of the clones task signals.
 * This version allows the network to be setup with initial parameters (clipsets, floats and bools).
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {string} network
 * @param {MoveInitialParameters} initParams [Ref]
 * @param {number} startPosX
 * @param {number} startPosY
 * @param {number} startPosZ
 * @param {number} startRotX
 * @param {number} startRotY
 * @param {number} startRotZ
 * @param {EEulerRotOrder} rotOrder
 * @param {number} blendDuration
 * @param {boolean} allowOverrideCloneUpdate
 * @param {string} animDictionary
 * @param {EMoveNetworkFlags} flags
 */
export function taskMoveNetworkAdvancedByNameWithInitParams(ped: PedIndex, network: string, initParams: MoveInitialParameters /* ptr */, startPosX: number, startPosY: number, startPosZ: number, startRotX: number, startRotY: number, startRotZ: number, rotOrder: EEulerRotOrder | number = 2, blendDuration: number = 0, allowOverrideCloneUpdate: boolean = false, animDictionary: string = null!, flags: EMoveNetworkFlags | number = 0): void {
	const taskMoveNetworkAdvancedByNameWithInitParams_result = Citizen.invokeNative<void>('0xF73EE77793731309', ped, network, initParams.dataView, startPosX, startPosY, startPosZ, startRotX, startRotY, startRotZ, rotOrder, blendDuration, allowOverrideCloneUpdate, animDictionary, flags);
	return taskMoveNetworkAdvancedByNameWithInitParams_result;
}