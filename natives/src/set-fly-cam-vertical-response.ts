import { CameraIndex } from '@ivanzaida/structures'

/**
 * CAM:SET_FLY_CAM_VERTICAL_RESPONSE
 *
 * 0xD141E0743BFCF358

 * 
 * ------------------------------------------------------------------
 * @param {CameraIndex} camera
 * @param {number} maxSpeed
 * @param {number} maxAcceleration
 * @param {number} maxDeceleration
 */
export function setFlyCamVerticalResponse(camera: CameraIndex, maxSpeed: number = 40, maxAcceleration: number = 40, maxDeceleration: number = 200): void {
	const setFlyCamVerticalResponse_result = Citizen.invokeNative<void>('0xD141E0743BFCF358', camera, maxSpeed, maxAcceleration, maxDeceleration);
	return setFlyCamVerticalResponse_result;
}