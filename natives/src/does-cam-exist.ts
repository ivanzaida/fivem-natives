import { CameraIndex } from '@ivanzaida/structures'

/**
 * CAM:DOES_CAM_EXIST
 *
 * 0x78411E34CF90EA8C

 * 
 * Returns whether or not the passed camera handle exists.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {CameraIndex} camera
 * @returns {boolean}  
 */
export function doesCamExist(camera: CameraIndex): boolean {
	const doesCamExist_result = Citizen.invokeNative<boolean>('0x78411E34CF90EA8C', camera);
	return doesCamExist_result;
}