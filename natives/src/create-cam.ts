import { CameraIndex } from '@ivanzaida/structures'

/**
 * CAM:CREATE_CAM
 *
 * 0x69D23632E4288DBD

 * 
 * "DEFAULT_SCRIPTED_CAMERA"
 * "DEFAULT_ANIMATED_CAMERA"
 * "DEFAULT_SPLINE_CAMERA"
 * "DEFAULT_SCRIPTED_FLY_CAMERA"
 * "TIMED_SPLINE_CAMERA"
 * 
 * 
 * ------------------------------------------------------------------
 * @param {string} cameraName
 * @param {boolean} startActivated Sets if the camera starts acive
 * @returns {CameraIndex}  
 */
export function createCam(cameraName: string, startActivated: boolean = false): CameraIndex {
	const createCam_result = Citizen.invokeNative<CameraIndex>('0x69D23632E4288DBD', cameraName, startActivated);
	return createCam_result;
}