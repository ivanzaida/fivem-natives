import { EEulerRotOrder } from '@ivanzaida/structures'

/**
 * STREAMING:SET_PLAYER_SWITCH_OUTRO
 *
 * 0x6A668C52322FABB2

 * 
 * Use this immediately after starting a player switch if the first frame of the outro
 * camera (e.g. motion builder cam etc) isn't the same as the ped position. this allows streaming
 * to request that scene (instead of a sphere around the new ped pos).
 * overrides the end scene for the player switch
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} camPosX
 * @param {number} camPosY
 * @param {number} camPosZ
 * @param {number} camRotX
 * @param {number} camRotY
 * @param {number} camRotZ
 * @param {number} camFov
 * @param {number} camFarClip
 * @param {EEulerRotOrder} rotOrder
 */
export function setPlayerSwitchOutro(camPosX: number, camPosY: number, camPosZ: number, camRotX: number, camRotY: number, camRotZ: number, camFov: number, camFarClip: number, rotOrder: EEulerRotOrder | number = 2): void {
	const setPlayerSwitchOutro_result = Citizen.invokeNative<void>('0x6A668C52322FABB2', camPosX, camPosY, camPosZ, camRotX, camRotY, camRotZ, camFov, camFarClip, rotOrder);
	return setPlayerSwitchOutro_result;
}