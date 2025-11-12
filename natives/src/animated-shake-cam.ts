import { CameraIndex } from '@ivanzaida/structures'

/**
 * CAM:ANIMATED_SHAKE_CAM
 *
 * 0x9EFC1351343A6835

 * 
 * Example from michael2 script.
 * 
 * CAM::ANIMATED_SHAKE_CAM(l_5069, "shake_cam_all@", "light", "", 1f);
 * 
 * 
 * ------------------------------------------------------------------
 * @param {CameraIndex} camera
 * @param {string} animDictionary
 * @param {string} animClipName
 * @param {string} shakeName
 * @param {number} amplitudeScalar Can be used to increase or decrease the amplitude of the shake effect.
 */
export function animatedShakeCam(camera: CameraIndex, animDictionary: string, animClipName: string, shakeName: string, amplitudeScalar: number = 1): void {
	const animatedShakeCam_result = Citizen.invokeNative<void>('0x9EFC1351343A6835', camera, animDictionary, animClipName, shakeName, amplitudeScalar);
	return animatedShakeCam_result;
}