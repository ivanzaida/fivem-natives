/**
 * CAM:DISABLE_FIRST_PERSON_CAMERA_WATER_CLIPPING_TEST_THIS_UPDATE
 *
 * 0xFFFF1D7E51F1970B

 * 
 * Sets some flag on cinematic camera
 * 
 * 
 * ------------------------------------------------------------------
 */
export function disableFirstPersonCameraWaterClippingTestThisUpdate(): void {
	const disableFirstPersonCameraWaterClippingTestThisUpdate_result = Citizen.invokeNative<void>('0xFFFF1D7E51F1970B', );
	return disableFirstPersonCameraWaterClippingTestThisUpdate_result;
}