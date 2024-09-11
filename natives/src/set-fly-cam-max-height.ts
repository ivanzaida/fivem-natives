import { CameraIndex } from '@ivanzaida/structures'

/**
 * CAM:SET_FLY_CAM_MAX_HEIGHT
 *
 * 0x4D66F5C6B248BB2A

 * 
 * ------------------------------------------------------------------
 * @param {CameraIndex} camera
 * @param {number} maxHeight
 */
export function setFlyCamMaxHeight(camera: CameraIndex, maxHeight: number = 500): void {
	const setFlyCamMaxHeight_result = Citizen.invokeNative<void>('0x4D66F5C6B248BB2A', camera, maxHeight);
	return setFlyCamMaxHeight_result;
}