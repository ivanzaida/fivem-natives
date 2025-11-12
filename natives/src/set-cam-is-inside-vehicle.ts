import { CameraIndex } from '@ivanzaida/structures'

/**
 * CAM:SET_CAM_IS_INSIDE_VEHICLE
 *
 * 0x2F0877034716FB33

 * 
 * When set to true shadows appear more smooth but less detailed.
 * Set to false by default.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {CameraIndex} camera
 * @param {boolean} state
 */
export function setCamIsInsideVehicle(camera: CameraIndex, state: boolean): void {
	const setCamIsInsideVehicle_result = Citizen.invokeNative<void>('0x2F0877034716FB33', camera, state);
	return setCamIsInsideVehicle_result;
}