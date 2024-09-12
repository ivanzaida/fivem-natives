import { CameraIndex } from '@ivanzaida/structures'

/**
 * CAM:SET_CAM_SHAKE_AMPLITUDE
 *
 * 0x17F06E9D89A05855

 * 
 * ------------------------------------------------------------------
 * @param {CameraIndex} camera
 * @param {number} amplitudeScalar Can be used to increase or decrease the amplitude of the shake effect.
 */
export function setCamShakeAmplitude(camera: CameraIndex, amplitudeScalar: number = 1): void {
	const setCamShakeAmplitude_result = Citizen.invokeNative<void>('0x17F06E9D89A05855', camera, amplitudeScalar);
	return setCamShakeAmplitude_result;
}