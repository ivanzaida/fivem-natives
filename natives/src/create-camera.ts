import { ECameraType, CameraIndex } from '@ivanzaida/structures'

/**
 * CAM:CREATE_CAMERA
 *
 * 0xBB209150C6081BBE

 * 
 * ------------------------------------------------------------------
 * @param {ECameraType} camera
 * @param {boolean} startActivated Sets if the camera starts acive
 * @returns {CameraIndex}  
 */
export function createCamera(camera: ECameraType | number = 26379945, startActivated: boolean = false): CameraIndex {
	const createCamera_result = Citizen.invokeNative<CameraIndex>('0xBB209150C6081BBE', camera, startActivated);
	return createCamera_result;
}