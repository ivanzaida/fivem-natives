import { CameraIndex } from '@ivanzaida/structures'

/**
 * CAM:IS_CAM_SPLINE_PAUSED
 *
 * 0x948A3D156F2E0E3A

 * 
 * ------------------------------------------------------------------
 * @param {CameraIndex} camera
 * @returns {boolean}  
 */
export function isCamSplinePaused(camera: CameraIndex): boolean {
	const isCamSplinePaused_result = Citizen.invokeNative<boolean>('0x948A3D156F2E0E3A', camera);
	return isCamSplinePaused_result;
}