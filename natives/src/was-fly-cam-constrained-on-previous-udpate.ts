import { CameraIndex } from '@ivanzaida/structures'

/**
 * CAM:WAS_FLY_CAM_CONSTRAINED_ON_PREVIOUS_UDPATE
 *
 * 0x0D5CED097A266DCE

 * 
 * ------------------------------------------------------------------
 * @param {CameraIndex} camera
 * @returns {boolean}  
 */
export function wasFlyCamConstrainedOnPreviousUdpate(camera: CameraIndex): boolean {
	const wasFlyCamConstrainedOnPreviousUdpate_result = Citizen.invokeNative<boolean>('0x0D5CED097A266DCE', camera);
	return wasFlyCamConstrainedOnPreviousUdpate_result;
}