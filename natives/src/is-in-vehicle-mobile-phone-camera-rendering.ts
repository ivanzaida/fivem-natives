/**
 * CAM:IS_IN_VEHICLE_MOBILE_PHONE_CAMERA_RENDERING
 *
 * 0x5F0F4F152FB7156C

 * 
 * This actually checks if this was rendered last frame, because script is updated before
 * the camera update.
 * 
 * 
 * ------------------------------------------------------------------
 * @returns {boolean}  
 */
export function isInVehicleMobilePhoneCameraRendering(): boolean {
	const isInVehicleMobilePhoneCameraRendering_result = Citizen.invokeNative<boolean>('0x5F0F4F152FB7156C', );
	return isInVehicleMobilePhoneCameraRendering_result;
}