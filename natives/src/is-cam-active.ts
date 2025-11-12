import { CameraIndex } from '@ivanzaida/structures'

/**
 * CAM:IS_CAM_ACTIVE
 *
 * 0xBC886554B5888A64

 * 
 * Note this mat reurn true but does not mean its rendering to the game screen
 * 
 * Returns whether or not the passed camera handle is active.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {CameraIndex} camera
 * @returns {boolean}  
 */
export function isCamActive(camera: CameraIndex): boolean {
	const isCamActive_result = Citizen.invokeNative<boolean>('0xBC886554B5888A64', camera);
	return isCamActive_result;
}