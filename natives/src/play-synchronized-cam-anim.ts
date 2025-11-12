import { CameraIndex } from '@ivanzaida/structures'

/**
 * CAM:PLAY_SYNCHRONIZED_CAM_ANIM
 *
 * 0xF9B66DAE101B699C

 * 
 * Examples:
 * 
 * CAM::PLAY_SYNCHRONIZED_CAM_ANIM(l_2734, NETWORK::NETWORK_GET_LOCAL_SCENE_FROM_NETWORK_ID(l_2739), "PLAYER_EXIT_L_CAM", "mp_doorbell");
 * 
 * CAM::PLAY_SYNCHRONIZED_CAM_ANIM(l_F0D[7/1/], l_F4D[15/1/], "ah3b_attackheli_cam2", "missheistfbi3b_helicrash");
 * 
 * 
 * ------------------------------------------------------------------
 * @param {CameraIndex} camera
 * @param {number} sceneId
 * @param {string} animName
 * @param {string} animDictName
 * @returns {boolean}  
 */
export function playSynchronizedCamAnim(camera: CameraIndex, sceneId: number, animName: string, animDictName: string): boolean {
	const playSynchronizedCamAnim_result = Citizen.invokeNative<boolean>('0xF9B66DAE101B699C', camera, sceneId, animName, animDictName);
	return playSynchronizedCamAnim_result;
}