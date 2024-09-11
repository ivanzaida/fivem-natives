import { CameraIndex } from '@ivanzaida/structures'

/**
 * CAM:IS_CAM_PLAYING_ANIM
 *
 * 0x444069759E788ECD

 * 
 * ------------------------------------------------------------------
 * @param {CameraIndex} camera
 * @param {string} animName
 * @param {string} animDictName
 * @returns {boolean}  
 */
export function isCamPlayingAnim(camera: CameraIndex, animName: string, animDictName: string): boolean {
	const isCamPlayingAnim_result = Citizen.invokeNative<boolean>('0x444069759E788ECD', camera, animName, animDictName);
	return isCamPlayingAnim_result;
}