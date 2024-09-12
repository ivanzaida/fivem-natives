import { CameraIndex } from '@ivanzaida/structures'

/**
 * CAM:ALLOW_MOTION_BLUR_DECAY
 *
 * 0x958B9F165A08995A

 * 
 * ------------------------------------------------------------------
 * @param {CameraIndex} camera
 * @param {boolean} enable
 */
export function allowMotionBlurDecay(camera: CameraIndex, enable: boolean): void {
	const allowMotionBlurDecay_result = Citizen.invokeNative<void>('0x958B9F165A08995A', camera, enable);
	return allowMotionBlurDecay_result;
}