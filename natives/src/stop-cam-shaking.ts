import { CameraIndex } from '@ivanzaida/structures'

/**
 * CAM:STOP_CAM_SHAKING
 *
 * 0x584EE85BE0BFA70E

 * 
 * ------------------------------------------------------------------
 * @param {CameraIndex} camera
 * @param {boolean} stopImmediately If TRUE, the shake will stop immediately, otherwise it will enter its release phase and fade out.
 */
export function stopCamShaking(camera: CameraIndex, stopImmediately: boolean = false): void {
	const stopCamShaking_result = Citizen.invokeNative<void>('0x584EE85BE0BFA70E', camera, stopImmediately);
	return stopCamShaking_result;
}