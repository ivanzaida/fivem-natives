import { CameraIndex, ECamAnimationFlags, EEulerRotOrder } from '@ivanzaida/structures'

/**
 * CAM:PLAY_CAM_ANIM
 *
 * 0x73D04EA6A13117B7

 * 
 * Atleast one time in a script for the zRot Rockstar uses GET_ENTITY_HEADING to help fill the parameter.
 * 
 * p9 is unknown at this time.
 * p10 throughout all the X360 Scripts is always 2.
 * 
 * Full list of animation dictionaries and anims by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/animDictsCompact.json
 * 
 * 
 * ------------------------------------------------------------------
 * @param {CameraIndex} camera
 * @param {string} animName
 * @param {string} animDictName
 * @param {number} originPositionX
 * @param {number} originPositionY
 * @param {number} originPositionZ
 * @param {number} originRotationX
 * @param {number} originRotationY
 * @param {number} originRotationZ
 * @param {ECamAnimationFlags} animFlags The animation flags to be used for playback.
 * @param {EEulerRotOrder} rotOrder
 * @returns {boolean}  
 */
export function playCamAnim(camera: CameraIndex, animName: string, animDictName: string, originPositionX: number, originPositionY: number, originPositionZ: number, originRotationX: number, originRotationY: number, originRotationZ: number, animFlags: ECamAnimationFlags | number = 0, rotOrder: EEulerRotOrder | number = 2): boolean {
	const playCamAnim_result = Citizen.invokeNative<boolean>('0x73D04EA6A13117B7', camera, animName, animDictName, originPositionX, originPositionY, originPositionZ, originRotationX, originRotationY, originRotationZ, animFlags, rotOrder);
	return playCamAnim_result;
}