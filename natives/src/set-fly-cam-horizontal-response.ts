import { CameraIndex } from '@ivanzaida/structures'

/**
 * CAM:SET_FLY_CAM_HORIZONTAL_RESPONSE
 *
 * 0xB07CF0F23305413E

 * 
 * ------------------------------------------------------------------
 * @param {CameraIndex} camera
 * @param {number} maxSpeed
 * @param {number} maxAcceleration
 * @param {number} maxDeceleration
 */
export function setFlyCamHorizontalResponse(camera: CameraIndex, maxSpeed: number = 40, maxAcceleration: number = 40, maxDeceleration: number = 200): void {
	const setFlyCamHorizontalResponse_result = Citizen.invokeNative<void>('0xB07CF0F23305413E', camera, maxSpeed, maxAcceleration, maxDeceleration);
	return setFlyCamHorizontalResponse_result;
}