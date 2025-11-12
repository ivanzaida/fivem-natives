import { ENewloadsceneFlags } from '@ivanzaida/structures'

/**
 * STREAMING:NEW_LOAD_SCENE_START_SPHERE
 *
 * 0x4A3280817398D754

 * 
 * starts a new spherical load scene, which is interior-aware and uses a streaming volume. this cannot be used during a player switch.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} posX
 * @param {number} posY
 * @param {number} posZ
 * @param {number} radius
 * @param {ENewloadsceneFlags} controlFlags
 * @returns {boolean}  
 */
export function newLoadSceneStartSphere(posX: number, posY: number, posZ: number, radius: number, controlFlags: ENewloadsceneFlags | number = 0): boolean {
	const newLoadSceneStartSphere_result = Citizen.invokeNative<boolean>('0x4A3280817398D754', posX, posY, posZ, radius, controlFlags);
	return newLoadSceneStartSphere_result;
}