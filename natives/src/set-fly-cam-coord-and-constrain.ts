import { CameraIndex } from '@ivanzaida/structures'

/**
 * CAM:SET_FLY_CAM_COORD_AND_CONSTRAIN
 *
 * 0xD09DCA9E9F147F36

 * 
 * ------------------------------------------------------------------
 * @param {CameraIndex} camera
 * @param {number} positionX
 * @param {number} positionY
 * @param {number} positionZ
 */
export function setFlyCamCoordAndConstrain(camera: CameraIndex, positionX: number, positionY: number, positionZ: number): void {
	const setFlyCamCoordAndConstrain_result = Citizen.invokeNative<void>('0xD09DCA9E9F147F36', camera, positionX, positionY, positionZ);
	return setFlyCamCoordAndConstrain_result;
}