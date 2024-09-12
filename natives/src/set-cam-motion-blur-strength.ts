import { CameraIndex } from '@ivanzaida/structures'

/**
 * CAM:SET_CAM_MOTION_BLUR_STRENGTH
 *
 * 0x687E31348D8E19AD

 * 
 * ------------------------------------------------------------------
 * @param {CameraIndex} camera
 * @param {number} strength
 */
export function setCamMotionBlurStrength(camera: CameraIndex, strength: number): void {
	const setCamMotionBlurStrength_result = Citizen.invokeNative<void>('0x687E31348D8E19AD', camera, strength);
	return setCamMotionBlurStrength_result;
}