import { CameraIndex } from '@ivanzaida/structures'

/**
 * CAM:SET_CAM_DEBUG_NAME
 *
 * 0xDAC1F4368A8FB625

 * 
 * NOTE: Debugging functions are not present in the retail version of the game.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {CameraIndex} camera
 * @param {string} debugName
 */
export function setCamDebugName(camera: CameraIndex, debugName: string): void {
	const setCamDebugName_result = Citizen.invokeNative<void>('0xDAC1F4368A8FB625', camera, debugName);
	return setCamDebugName_result;
}