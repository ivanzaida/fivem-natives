/**
 * CAM:BYPASS_CAMERA_COLLISION_BUOYANCY_TEST_THIS_UPDATE
 *
 * 0xB785349D98C90E5A

 * 
 * Disable the camera collision buoyancy test for one frame
 * 
 * 
 * ------------------------------------------------------------------
 */
export function bypassCameraCollisionBuoyancyTestThisUpdate(): void {
	const bypassCameraCollisionBuoyancyTestThisUpdate_result = Citizen.invokeNative<void>('0xB785349D98C90E5A', );
	return bypassCameraCollisionBuoyancyTestThisUpdate_result;
}