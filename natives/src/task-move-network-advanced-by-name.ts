import { PedIndex, EEulerRotOrder, EMoveNetworkFlags } from '@ivanzaida/structures'

/**
 * TASK:TASK_MOVE_NETWORK_ADVANCED_BY_NAME
 *
 * 0xE8F1DEE1AE8DBF3E

 * 
 * Task to start a move network of the type passed with custom start pos and orientation
 * When bAllowOverrideCloneUpdate is used in MP the remotely cloned ped will not update in sync with commands sent locally
 * and it is expected that the remote machine will override the update of the clones task signals.
 * 
 * Example:
 * TASK::TASK_MOVE_NETWORK_ADVANCED_BY_NAME(PLAYER::PLAYER_PED_ID(), "minigame_tattoo_michael_parts", 324.13f, 181.29f, 102.6f, 0.0f, 0.0f, 22.32f, 2, 0, false, 0, 0);
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {string} network
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
export function taskMoveNetworkAdvancedByName(ped: PedIndex, network: string, startPosX: number, startPosY: number, startPosZ: number, startRotX: number, startRotY: number, startRotZ: number, rotOrder: EEulerRotOrder | number = 2, blendDuration: number = 0, allowOverrideCloneUpdate: boolean = false, animDictionary: string = null!, flags: EMoveNetworkFlags | number = 0): void {
	const taskMoveNetworkAdvancedByName_result = Citizen.invokeNative<void>('0xE8F1DEE1AE8DBF3E', ped, network, startPosX, startPosY, startPosZ, startRotX, startRotY, startRotZ, rotOrder, blendDuration, allowOverrideCloneUpdate, animDictionary, flags);
	return taskMoveNetworkAdvancedByName_result;
}