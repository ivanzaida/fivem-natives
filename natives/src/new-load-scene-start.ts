import { ENewloadsceneFlags } from '@ivanzaida/structures'

/**
 * STREAMING:NEW_LOAD_SCENE_START
 *
 * 0xAC48F8E2BF2BEBF7

 * 
 * starts a new frustum load scene, which is interior-aware and uses a streaming volume
 * 
 * `radius` value is usually between `3f` and `7000f` in original 1868 scripts.
 * `p7` is 0, 1, 2, 3 or 4 used in decompiled scripts, 0 is by far the most common.
 * Returns True if success, used only 7 times in decompiled scripts of 1868
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} posX
 * @param {number} posY
 * @param {number} posZ
 * @param {number} dirX
 * @param {number} dirY
 * @param {number} dirZ
 * @param {number} farClip
 * @param {ENewloadsceneFlags} controlFlags
 * @returns {boolean}  
 */
export function newLoadSceneStart(posX: number, posY: number, posZ: number, dirX: number, dirY: number, dirZ: number, farClip: number, controlFlags: ENewloadsceneFlags | number = 0): boolean {
	const newLoadSceneStart_result = Citizen.invokeNative<boolean>('0xAC48F8E2BF2BEBF7', posX, posY, posZ, dirX, dirY, dirZ, farClip, controlFlags);
	return newLoadSceneStart_result;
}