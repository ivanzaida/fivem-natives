import { CameraIndex } from '@ivanzaida/structures'

/**
 * CAM:STOP_CAM_POINTING
 *
 * 0xFC8624DF7EBA74FB

 * 
 * ------------------------------------------------------------------
 * @param {CameraIndex} camera
 */
export function stopCamPointing(camera: CameraIndex): void {
	const stopCamPointing_result = Citizen.invokeNative<void>('0xFC8624DF7EBA74FB', camera);
	return stopCamPointing_result;
}