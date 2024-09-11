import { CameraIndex } from '@ivanzaida/structures'

/**
 * CAM:POINT_CAM_AT_COORD
 *
 * 0x2ABEBC4952CA3C7F

 * 
 * ------------------------------------------------------------------
 * @param {CameraIndex} camera
 * @param {number} coorsX
 * @param {number} coorsY
 * @param {number} coorsZ
 */
export function pointCamAtCoord(camera: CameraIndex, coorsX: number, coorsY: number, coorsZ: number): void {
	const pointCamAtCoord_result = Citizen.invokeNative<void>('0x2ABEBC4952CA3C7F', camera, coorsX, coorsY, coorsZ);
	return pointCamAtCoord_result;
}