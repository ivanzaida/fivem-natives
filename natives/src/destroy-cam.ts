import { CameraIndex } from '@ivanzaida/structures'

/**
 * CAM:DESTROY_CAM
 *
 * 0x85E6A1E36B5E2E4D

 * 
 * BOOL param indicates whether the cam should be destroyed if it belongs to the calling script.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {CameraIndex} camera
 * @param {boolean} shouldApplyAcrossAllThreads
 */
export function destroyCam(camera: CameraIndex, shouldApplyAcrossAllThreads: boolean = false): void {
	const destroyCam_result = Citizen.invokeNative<void>('0x85E6A1E36B5E2E4D', camera, shouldApplyAcrossAllThreads);
	return destroyCam_result;
}